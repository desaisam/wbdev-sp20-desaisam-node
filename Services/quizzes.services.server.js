const quizzes = [
  { _id: "123", title: "Quiz1" },
  { _id: "234", title: "Quiz2" },
  { _id: "456", title: "Quiz3" }
];

findAllQuizzes = () => quizzes;

findQuizById = qid => quizzes.find(quiz => quiz._id === qid);

module.exports = {
  findAllQuizzes,
  findQuizById
};
