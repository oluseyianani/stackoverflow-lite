
class QuestionManager {
  constructor(connection) {
    this.conn = connection;
    this.table = 'questions';
    this.answerTable = 'answers';
  }

  createQuestion(userId, questionTitle, questionContent, username, callback) {
    this.conn.insertQuestion(userId, questionTitle, questionContent, username, (err, result) => {
      callback(err, result.rows);
    });
  }

  getAllQuestion(callback) {
    this.conn.selectQuestions((result, err) => {
      if (err) {
        callback('There was an error retrieving questions');
      }
      callback(result);
    });
  }

  getQuestion(questionId, callback) {
    this.conn.selectByQuestionId(this.table, questionId, (error, result) => {
      callback(error, result);
    });
  }

  getUserQuestions(username, callback) {
    this.conn.selectQuestionByUsername(username, (error, result) => {
      callback(error, result);
    });
  }

  searchQuestion(questionQuery, callback) {
    this.conn.searchAllQuestion(questionQuery, (error, match) => {
      callback(error, match);
    });
  }

  createAnswer(userId, questionId, answer, answerNumber, username, callback) {
    this.conn.insertAnswer(userId, questionId, answer, answerNumber, username, (err, result) => {
      callback(err, result);
    });
  }

  getSpecificAnswer(questionId, answerId, callback) {
    this.conn.selectOneAnswer(questionId, answerId, (result, err) => {
      callback(result, err);
    });
  }

  getQuestionAndAnswer(questionId, callback) {
    this.conn.selectQuestionAndAnswer(questionId, (err, result) => {
      callback(err, result);
    });
  }

  getAnswer(questionId, callback) {
    this.conn.selectAnswer(this.answerTable, questionId, (err, result) => {
      callback(result, err);
    });
  }

  markAnswer(answerNumber, callback) {
    this.conn.updateMarkedAnswer(answerNumber, (err, result) => {
      if (err) {
        callback('error');
      }
      callback('successfully marked');
    });
  }

  updateAnswer(answerNumber, answer, questionId, callback) {
    this.conn.updateQuestionAnswer(answerNumber, answer, questionId, (err, result) => {
      callback(err, result.rows);
    });
  }

  orderedByMostAnswers(username, callback) {
    this.conn.selectMostAnswered(username, (error, mostAnswer) => {
      callback(error, mostAnswer.rows);
    });
  }

  createVotes(questionId, answerId, userId, currentVote, otherVote, username, callback) {
    this.conn.insertVotes(questionId, answerId, userId, currentVote, otherVote, username, (err, vote) => {
      callback(err, vote);
    });
  }

  getVotes(questionId, answerId, callback) {
    this.conn.selectVotes(questionId, answerId, (err, allVotes) => {
      callback(err, allVotes);
    });
  }

  createComments(userId, questionId, answerId, comment, username, callback) {
    this.conn.insertComment(userId, questionId, answerId, comment, username, (error, resComment) => {
      callback(error, resComment);
    });
  }

  getAllComments(questionId, callback) {
    this.conn.selectComments(questionId, (error, comments) => {
      callback(error, comments);
    });
  }

  deleteOne(questionId, callback) {
    this.conn.deleteQuestionById(this.table, questionId, (result, err) => {
      callback(result, err);
    });
  }
}

export default QuestionManager;
