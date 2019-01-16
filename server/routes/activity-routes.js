const zipFolder = require('zip-folder');
const Slack = require('node-slack-upload');
const SLACK_TOKEN = process.env.SLACK_TOKEN_MYSELF
const slack = new Slack(SLACK_TOKEN);
const fs = require('fs');
const lessPlanPath = process.env.TRILOGY_DIR

module.exports = function (app) {

    // slacks zipped solved
    app.post('/solved', function (req, res) {

        var value = req.body.classChosen;
        var slackClass = selectClass(value);

        readDirector(res, req, lessPlanPath, slackClass, 'Solved')
            .then(prepareCompression)
            .then(slackZipped)
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });

    })

    // slacks zipped unsolved
    app.post('/unsolved', function (req, res) {

        var value = req.body.classChosen;

        var slackClass = selectClass(value);

        readDirector(res, req, lessPlanPath, slackClass, 'UnSolved')
            .then(prepareCompression)
            .then(slackZipped)
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    })
}

function selectClass(value) {
    switch (value) {
        case 1:
            return '_all_class';
            console.log('All channel selected')
            break;

        case 2:
            return '_m_w_class_chat';
            console.log('Mon-Wed Channel picked')
            break;

        case 3:
            return '_t_th_class_chat';
            console.log('Tue-Thur Channel Picked')
            break;

        case 4:
            return '@luis.the.coder';
            console.log('Testing Channel')
            break;

        default:
            return null;

    }
}

function readDirector(res, req, lessPlanPath, slackClass, isSolved) {

    return new Promise(function (resolve, reject) {

        fs.readdir(lessPlanPath + req.body.dir, (err, files) => {

            if (err) {

                reject(err);

            } else {

                var arrFiles = [];
                var solved;

                files.forEach(file => {
                    arrFiles.push(file);

                    solved = file === isSolved | true;

                });

                resolve({res, req, solved, lessPlanPath, slackClass, isSolved});
            }
        });

    });
}

function prepareCompression(data) {

    let {res, req, solved, lessPlanPath, slackClass, isSolved} = data;
    let folder;
    let zippFile;

    if (isSolved == 'UnSolved'){

        folder = '/Unsolved';
        zippFile = '-Solved.zip'

    } else {

        folder = '/solved';
        zippFile = '-UnSolved.zip'
    }

    return new Promise(function (resolve, reject) {

        if (solved) {

            let path = `${lessPlanPath}${req.body.dir}${folder}`;
            let zippedPath = `${lessPlanPath}${req.body.dir}${req.body.activity}${zippFile}`;


            zipFolder(path, zippedPath,

                // callback 
                function (err) {

                    if (err) {

                        reject(err);

                        console.log('oh no!', err);

                    } else {

                        resolve({res, req, zippedPath, slackClass});

                    }

                });

        } else {


            let path = `${lessPlanPath}${req.body.dir}`;
            let zippedPath = `${lessPlanPath}${req.body.dir}${req.body.activity}-EntireFolder.zip`

            zipFolder(path, zippedPath,

                // callback 
                function (err) {

                    if (err) {

                        reject(err);

                        console.log('oh no!', err);

                    } else {

                        resolve({res, req, zippedPath, slackClass});

                    }

                });

        }

    });

}

function slackZipped(data) {

    let { res, req, zippedPath, slackClass } = data;

    return new Promise((resolve, reject) => {

        slack.uploadFile({

            file: fs.createReadStream(zippedPath),
            filetype: 'auto',
            channels: slackClass

        },
            function (err, data) {

                if (err) {

                    reject(err);

                } else {

                    resolve(data);

                }

                res.send(200);
            });

    })

}