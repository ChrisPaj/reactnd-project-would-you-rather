import {
  _getUsers,
  _getQuestions,
	_getAuthedUser,
  _saveQuestion,
  _saveQuestionAnswer
} from "./_DATA.js";

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions(), _getAuthedUser()]).then(
    ([users, questions, authedUser]) => ({
      users,
      questions,
			authedUser,
    })
  );
}
//_saveQuestion (question)
export function saveQuestion(info) {
  return _saveQuestion(info);
}
// _saveQuestionAnswer ({ authedUser, qid, answer })
export function saveQuestionAnswer(info) {
  return _saveQuestionAnswer(info);
}
