const fs = require('fs');


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
module.exports = readDirectory;