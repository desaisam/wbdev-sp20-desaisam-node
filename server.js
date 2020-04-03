

const express = require("express");
const app = express();
app.use(function (req,res, next) {
    res.header('Access-Control-Allow-Origin',
        '*');   
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Credentials',
        'true');
    next();
});

require("./Controllers/quizzes.controllers.server")(app);
require("./Controllers/question.controller.server")(app);
app.listen(process.env.PORT || 3000);