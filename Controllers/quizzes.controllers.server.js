const quizzesService = require("../services/quizzes.services.server");
module.exports = function(app) {
  app.get("/api/quizzes", (req, res) =>
    quizzesService.findAllQuizzes().then(allQuizzes => res.send(allQuizzes))
  );
  app.get("/api/quizzes/:qzid", (req, res) =>
    quizzesService.findQuizById(req.params["qzid"]).then(quiz => res.json(quiz))
  );

  app.get('/api/quizzes/:qid/questions', (req, res) =>
  quizzesService.findQuizById(req.params['qid'])
      .then(quiz => res.json(quiz.questions)))
};
