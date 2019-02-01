import {
  _getUsers,
  _getQuestions,
	_getAuthedUser,
	_getHasAnswered,
  _saveQuestion,
  _saveQuestionAnswer
} from "./_DATA.js";

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions(), _getAuthedUser(), _getHasAnswered()]).then(
    ([users, questions, authedUser, hasAnswered]) => ({
      users,
      questions,
			authedUser,
			hasAnswered
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
