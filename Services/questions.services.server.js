const questions = require("./questions");

const findAllQuestions = () => questions;

const findQuestionById = questionId =>
  questions.find(question._id === questionId);

const findQuestionForQuiz = quizId =>
  questions.filter(question => question.quizId === quizId);

module.exports = {
  findAllQuestions,
  findQuestionById,
  findQuestionForQuiz
};
