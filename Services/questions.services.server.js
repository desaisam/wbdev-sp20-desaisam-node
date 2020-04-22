
const mongoose = require("mongoose");

const questionsDao = require("../dao/questions.dao.server");

// const questions = require("./questions");
// mongoose.connect("mongodb://127.0.0.1:27017/whiteboard-desaisam-sp20", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });
const findAllQuestions = () => questionsDao.findAllQuestions();

const findQuestionById = questionId =>
  questionsDao.findQuestionsById(questionId);

const findQuestionForQuiz = quizId => questionsDao.findQuestionsForQuiz(quizId);

module.exports = {
  findAllQuestions,
  findQuestionById,
  findQuestionForQuiz
};
