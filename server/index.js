require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(pino);


// Routes
// =============================================================
require("./routes/readme-routes.js")(app);
require("./routes/lesson-plan-routes.js")(app);
require("./routes/activity-routes.js")(app);
require("./routes/files-routes.js")(app);


app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);