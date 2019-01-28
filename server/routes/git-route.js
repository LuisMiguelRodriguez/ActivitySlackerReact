// const { spawn } = require('child_process')
const exec = require('child_process').exec;
const shell = require('shelljs');
const path = require('path');
const lessPlanPath = process.env.TRILOGY_DIR;



module.exports = function (app) {

    app.post('/git', function (req, res) {

        console.log('from git route');

        console.log('req.body : ', req.body);

        var classRepo = req.body.dir.split('01-Class-Content/')[1];

        var finalDest = `${lessPlanPath}${classRepo}`;

        

        // console.log(__dirname+ '../utils-module')
        // shell.exec(__dirname + '../utils-module/bash/gitSolved.sh')

        
        let testscript = exec( `${__dirname}/../utils-module/bash/gitSolved.sh ${lessPlanPath+req.body.dir}/  ${lessPlanPath}test-repo/${finalDest}`)

        // console.log('directory path :  ', directoryPath)
        // const testscript = exec(`cp  -r ${lessPlanPath+req.body.dir}/. ${lessPlanPath}/test-repo/Solved `);
        
        testscript.stdout.on('data', function(data){
            console.log(data); 
            // sendBackInfo();


        });
        
        testscript.stderr.on('data', function(data){
            console.log(data);
            // triggerErrorStuff(); 
        });

        res.sendStatus(200)

    });


}