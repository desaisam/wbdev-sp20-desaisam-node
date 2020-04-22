const express = require("express");

const app = express();

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/whiteboard-desaisam-sp20',
{ useNewUrlParser: true, useUnifiedTopology: true })

var bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, X-Requested-With, Origin"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});



require("./Controllers/quizzes.controllers.server")(app);
require("./Controllers/question.controller.server")(app);
require("./Controllers/quiz-attempts.controller.server")(app);  
app.listen(process.env.PORT || 3000);
