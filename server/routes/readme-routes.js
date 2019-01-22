const fs = require('fs');
const axios = require('axios');
const slackifyMarkdown = require('slackify-markdown');
const lessPlanPath = process.env.TRILOGY_DIR;
const { selectClass, readDirectory } = require('../utils-module');
const { WebClient } = require('@slack/client');

// An access token (from your Slack app or custom integration - xoxp, xoxb)
const token = process.env.TOKEN;

const web = new WebClient(token);

module.exports = function (app) {

    app.get('/readMe', function (req, res) {

        const { link } = req.query;
        const path = lessPlanPath + link;
        // Grab directory without the README
        const newPath = path.split('README.md')[0];


        fs.readFile(path, "utf8", function (error, data) {

            // If the code experiences any errors it will log the error to the console.
            if (error) {

                console.log('error found ', error);

                var data = 'Sorry there is no Readme file for this Activity';
                console.log(data)

                readDirectory(newPath, data, res);



            } else {
                //Read directory of the activity and grab a reference
                // to whats in the folder

                readDirectory(newPath, data, res);


            }

        });

    })

    app.post('/slack', function (req, res) {

        let slackMarkdown = slackifyMarkdown(req.body.readme);

        var options = {
            text: slackMarkdown,
            mrkdwn: true
        };

        var value = req.body.classChosen;

        var slackClass = selectClass(value);

        console.log(slackClass)

        // See: https://api.slack.com/methods/chat.postMessage
        web.chat.postMessage({ channel: slackClass, text: slackMarkdown })
            .then((res) => {
                // `res` contains information about the posted message
                console.log('Message sent: ', res.ts);
                res.sendStatus(200)
            })
            .catch(() => {
                console.error
                res.sendStatus(404);
            });

    })

}