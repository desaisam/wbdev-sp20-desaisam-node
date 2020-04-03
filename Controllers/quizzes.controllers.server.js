const quizService = require('../Services/quizzes.services.server')


module.exports = function(app) {


  app.get("/hello", (req, res) => res.json("Hello World"));


  app.get("/api/quizzes", (req, res) => res.json(quizService.findAllQuizzes()));

  app.get("/api/quizzes/:qid", (req, res) =>
    res.json(quizService.findQuizById(req.params["qid"]))
  );

};
