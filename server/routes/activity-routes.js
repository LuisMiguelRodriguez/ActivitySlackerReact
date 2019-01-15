const axios       = require('axios');
const zipFolder   = require('zip-folder');
const Slack       = require('node-slack-upload');
const SLACK_TOKEN = process.env.SLACK_TOKEN_MYSELF 
// const SLACK_TOKEN = process.env.SLACK_TOKEN_MONWED;
const slack       = new Slack(SLACK_TOKEN);
const fs          = require('fs');
const lessPlanPath = process.env.TRILOGY_DIR;


module.exports = function(app) {

    // slacks zipped solved
    app.post('/solved', function (req, res) {

        var solved;
        var unsolved;
        var value = req.body.classChosen;

        switch (value) {
            case 1:
                var slackClass = '_all_class';
                console.log('All channel selected')
                break;

            case 2:
                var slackClass = '_m_w_class_chat';
                console.log('Mon-Wed Channel picked')
                break;

            case 3:
                var slackClass = '_t_th_class_chat';
                console.log('Tue-Thur Channel Picked')
                break;

            case 4:
                var slackClass = '@luis.the.coder';
                console.log('Testing Channel')
                break;

            default:
                console.log('No class chosen');

        }

        fs.readdir(lessPlanPath + req.body.dir, (err, files) => {
   
            var arrFiles = [];

            files.forEach(file => {
                arrFiles.push(file);

                solved = file === 'Solved' | true;

            });


            if (solved) {

                console.log('Serving Solved Folder');

                zipFolder(
                    lessPlanPath + req.body.dir + '/Solved', lessPlanPath + req.body.dir + req.body.activity + '-Solved.zip',

                    // callback 
                    function (err) {

                        if (err) {

                            console.log('oh no!', err);

                        } else {

                            console.log('Sucessful')

                            slack.uploadFile({
                                    file: fs.createReadStream(lessPlanPath + req.body.dir + req.body.activity + '-Solved.zip'),
                                    filetype: 'auto',
                                    channels: slackClass

                                },
                                function (err, data) {
                                    if (err) {
                                        console.error(err);
                                    } else {
                                        console.log('Uploaded file details: ', data);
                                    }

                                    res.send(200);
                                });

                        }

                    });

            } else {

                console.log('No unsolved folder will return entire folder');

                for (var file of arrFiles) {
                    console.log(file);
                }

                zipFolder(
                    lessPlanPath + req.body.dir, lessPlanPath + req.body.dir + '/Unsolved.zip',

                    // callback 
                    function (err) {

                        if (err) {
                            console.log('oh no!', err);
                        } else {

                            console.log('Sucessful')

                            fs.readFile(lessPlanPath + req.body.dir + '/' + req.body.activity + '.zip', function (error, data) {

                                slack.uploadFile({
                                        file: fs.createReadStream(lessPlanPath + req.body.dir + '/Unsolved.zip'),
                                        filetype: 'auto',
                                        channels: slackClass
                                    },
                                    function (err, data) {
                                        if (err) {
                                            console.error(err);
                                        } else {
                                            console.log('Uploaded file details: ', data);
                                        }
                                        res.send(200)
                                    });

                            });

                        }

                    });
            }

        })
    })

    // slacks zipped unsolved
    app.post('/unsolved', function (req, res) {

        console.log(req.body.dir)
        console.log(req.body.activity)

        var unSolved;

        var value = req.body.classChosen;
        console.log('##########################################')

        switch (value) {
            case 1:
                var slackClass = '_all_class';
                console.log('All channel selected')
                break;

            case 2:
                var slackClass = '_m_w_class_chat';
                console.log('Mon-Wed Channel picked')
                break;

            case 3:
                var slackClass = '_t_th_class_chat';
                console.log('Tue-Thur Channel Picked')
                break;

            case 4:
                var slackClass = '@luis.the.coder';
                console.log('Testing Channel')
                break;

            default:
                console.log('No class chosen');

        }

        console.log('##########################################')

        fs.readdir(lessPlanPath + req.body.dir, (err, files) => {

            if (err) throw err;
            var arrFiles = [];

            files.forEach(file => {
                arrFiles.push(file);

                unSolved = file === 'UnSolved' ? false : true;
                console.log(file)

            });


            if (unSolved) {

                console.log('Serving UnSolved Folder');

                zipFolder(
                    lessPlanPath + req.body.dir + '/Unsolved', lessPlanPath + req.body.dir + req.body.activity + '-Unsolved.zip',

                    // callback 
                    function (err) {

                        if (err) {

                            console.log('oh no!', err);

                        } else {

                            console.log('Sucessful')


                            slack.uploadFile({
                                    file: fs.createReadStream(lessPlanPath + req.body.dir + req.body.activity + '-Unsolved.zip'),
                                    filetype: 'auto',
                                    channels: slackClass,

                                },
                                function (err, data) {
                                    if (err) {
                                        console.error(err);
                                    } else {
                                        console.log('Uploaded file details: ', data);
                                    }

                                    res.send(200);
                                
                                }
                            );

                        }

                    }
                );

            } else {

                console.log('No unsolved folder will return entire folder');

                for (var file of arrFiles) {
                    console.log(file);
                }

                zipFolder(
                    lessPlanPath + req.body.dir, lessPlanPath + req.body.dir + '/Unsolved.zip',

                    // callback 
                    function (err) {

                        if (err) {
                            console.log('oh no!', err);
                        } else {

                            console.log('Sucessful')

                            fs.readFile(lessPlanPath + req.body.dir + '/' + req.body.activity + '.zip', function (error, data) {

                                slack.uploadFile({
                                        file: fs.createReadStream(lessPlanPath + req.body.dir + '/Unsolved.zip'),
                                        filetype: 'auto',
                                        channels: slackClass
                                    },
                                    function (err, data) {
                                        if (err) {
                                            console.error(err);
                                        } else {
                                            console.log('Uploaded file details: ', data);
                                        }
                                        res.send(200);
                                    });

                            });

                        }

                    });
            }

        })
    })
}