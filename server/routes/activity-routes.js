const zipFolder = require('zip-folder');
const fs = require('fs');
const lessPlanPath = process.env.TRILOGY_DIR
const { WebClient } = require('@slack/client');
const { selectClass } = require('../utils-module');

const token = process.env.TOKEN;

const web = new WebClient(token);

module.exports = function (app) {

    // slacks zipped solved
    app.post('/solved', function (req, res) {

        var value = req.body.classChosen;
        var slackClass = selectClass(value);

        console.log('req.body @ entry :  ', req.body)

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

                resolve({ res, req, solved, lessPlanPath, slackClass, isSolved });
            }
        });

    });
}

function prepareCompression(data) {

    let { res, req, solved, lessPlanPath, slackClass, isSolved } = data;
    let folder;
    let zippFile;

    console.log('value of isSolved:   ',isSolved)

    if (isSolved == 'UnSolved') {

        folder = '/Unsolved';
        zippFile = 'UnSolved.zip'

    } else {

        folder = '/solved';
        zippFile = '-Solved.zip'
    }

    return new Promise(function (resolve, reject) {

        if (solved) {

            let path = `${lessPlanPath}${req.body.dir}${folder}`;
            let zippedPath = `${lessPlanPath}${req.body.dir}/${req.body.activity}${zippFile}`;

            zipFolder(path, zippedPath,

                // callback 
                function (err) {

                    if (err) {

                        reject(err);

                        console.log('oh no!', err);

                    } else {

                        resolve({ res, req, zippedPath, slackClass });

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

                        resolve({ res, req, zippedPath, slackClass });

                    }

                });

        }

    });

}

function slackZipped(data) {

    let { res, req, zippedPath, slackClass } = data;

    let response = res;

    return new Promise((resolve, reject) => {

        web.files.upload({
            file: fs.createReadStream(zippedPath),
            channels: slackClass
        })
            .then((res) => {
                // `res` contains information about the uploaded file
                
                console.log('File uploaded: ', res.file.id);

                response.status(200);
            })
            .catch(console.error);

    })

}