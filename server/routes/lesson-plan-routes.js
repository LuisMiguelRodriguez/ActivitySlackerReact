const fs = require('fs');
const lessPlanPath = "/media/luisthecoder/Code/UCI/02-lesson-plans/part-time/";

module.exports = function(app) {

    // GET route for getting all of the posts
    app.get("/readLessonPlan", function(req, res) {

        var { link } = req.query;

        console.log('lesson plan: link data', link)

        fs.readFile( lessPlanPath + link, "utf8", function (error, data) {

            // If the code experiences any errors it will log the error to the console.
            if (error) {
                console.log(error);
    
                res.send('hello')
            } else {
                // console.log(data);
                
                res.send(data);
            }
        });
  
    });

}