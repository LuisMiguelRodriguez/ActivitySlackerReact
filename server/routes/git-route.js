const exec = require('child_process').exec;
const lessPlanPath = process.env.TRILOGY_DIR
const studentRepo = process.env.STUDENT_REPO;

module.exports = function (app) {

    app.post('/git', function (req, res) {

        var classRepo = req.body.dir.split('01-Class-Content/')[1];

        var finalDest = `${studentRepo}${classRepo}`;

        let testscript = exec( `${__dirname}/../utils-module/bash/gitSolved.sh ${lessPlanPath+req.body.dir}/  ${finalDest}`)
        
        testscript.stdout.on('data', function(data){

            console.log(data); 

        });
        
        testscript.stderr.on('data', function(data){

            console.log(data);

        });

        res.sendStatus(200)

    });


}