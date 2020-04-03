const questionService = require("./../Services/questions.services.server");

module.exports = function(app) {
  app.get("/api/quizzes/:quizId/questions", (req, res) => {
    const quizId = req.params["quizId"];
    const questions = questionService.findQuestionForQuiz(quizId);
    res.json(questions);
  });

  app.get("/api/questions", (req, res) => {
    const questions = questionService.findAllQuestions();
    res.json(questions);
  });

  app.get("/api/questions/:qid", (req, res) => {
    const questions = questionService.findQuestionById(req.params["qid"]);
    res.json(questions);
  });
};
