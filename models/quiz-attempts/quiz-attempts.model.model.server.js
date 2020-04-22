const mongoose = require("mongoose");

const quizzAttemptsSchema = require("./quiz-attempts.schema.server");

const quizAttemptsModel = mongoose.model(
  "QuizAttemptsModel",
  quizzAttemptsSchema
);
module.exports = quizAttemptsModel;
