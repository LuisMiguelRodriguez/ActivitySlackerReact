const fs = require('fs');
const axios = require('axios');
const slackifyMarkdown = require('slackify-markdown');
// const lessPlanPath = "/media/luisthecoder/Code/UCI/";
const lessPlanPath = process.env.TRILOGY_DIR;

module.exports = function (app) {

    function readDirectory(path, res) {
        fs.readdir(path, function (err, items) {
            if (err) throw err;
            console.log(items);

            for (var i = 0; i < items.length; i++) {
                console.log(items[i]);
            }

            res.send({
                
                files: items
            });

        });
    }

    app.get('/files', function (req, res) {

        const { link } = req.query;
        const path = lessPlanPath + link;
        // Grab directory without the README
        const newPath = path.split('README.md')[0];

        readDirectory(newPath, res);

    });


}