const questionsModel = require("../models/questions/questions.model.server");
// const quizzesModel = require("../models/quizzes/quizzes.model.server");

const findAllQuestions = () => questionsModel.find();

// const findQuestionsById = qid => questionsModel.findById(qid);

// const findQuestionsForQuiz = quizId =>
//   quizzesModel
//     .findById(quizId)
//     .populate("questions")
//     .then(quiz => quiz.questions);
// module.exports = { findAllQuestions, findQuestionsById, findQuestionsForQuiz };

module.exports = {
  findAllQuestions
};
