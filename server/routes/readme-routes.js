const fs = require('fs');
const axios = require('axios');
const slackifyMarkdown = require('slackify-markdown');
const lessPlanPath = process.env.TRILOGY_DIR;

module.exports = function (app) {



    function readDirectory(path, data, res) {
        fs.readdir(path, function (err, items) {
            if (err) throw err;
            console.log(items);

            for (var i = 0; i < items.length; i++) {
                console.log(items[i]);
            }

            res.send({
                data: data,
                files: items
            });

        });
    }

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

        // grab slack webhooks
        const { webhook_uci_all } = process.env;
        const { webhook_uci_m_w } = process.env;
        const { webhook_uci_t_th } = process.env;
        const { webhook_uci_test } = process.env;

        switch (value) {
            case 1:
                var slackClass = webhook_uci_all;
                console.log('All channel selected')
                break;

            case 2:
                var slackClass = webhook_uci_m_w;
                console.log('Mon-Wed Channel picked')
                break;

            case 3:
                var slackClass = webhook_uci_t_th;
                console.log('Tue-Thur Channel Picked')
                break;

            case 4:
                var slackClass = webhook_uci_test;
                console.log('')
                break;

            default:
                console.log('No class chosen');

        }
        console.log(slackClass)

        axios.post(slackClass, JSON.stringify(options))
            .then((response) => {
                console.log('SUCCEEDED: Sent slack webhook: \n', response.data);
                res.send(200);
            })
            .catch((error) => {
                console.log('FAILED: Send slack webhook', error);
                // reject(new Error('FAILED: Send slack webhook'));
                res.send(404)
            });

        console.log('after post')

    })

}