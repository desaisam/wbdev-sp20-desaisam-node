const mongoose = require("mongoose");
// const quizzes = [
//   { _id: "123", title: "Quiz1" },
//   { _id: "234", title: "Quiz2" },
//   { _id: "456", title: "Quiz3" }
// ];

// mongoose.connect("mongodb://127.0.0.1:27017/whiteboard-desaisam-sp20", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

const quizzDao = require("../dao/quizzes.dao.server");
// const quizzesSchmea = mongoose.Schema(
//   { title: String, avg: Number },
//   { collection: "quizzes" }
// );

// const quizzesModel = mongoose.model("QuizzesModel", quizzesSchmea);

// quizzesModel.find().then(allQuizzes => console.log(allQuizzes));

const findAllQuizzes = () => quizzDao.findAllQuizzes();

const findQuizById = qid => quizzDao.findQuizById(qid);

module.exports = {
  findAllQuizzes,
  findQuizById
};
