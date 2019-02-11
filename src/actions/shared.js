import { getInitialData, saveQuestionAnswer, saveQuestion } from "../utils/api";
import { getQuestions, answerQuestion, addQuestionToQuestions } from "./questions";
import { getAuthedUser,  } from "./authedUser";
import { getUsers, answerUser, addQuestionToUser } from "./users";

export function handleInitialData() {
  return dispatch => {
    return getInitialData()
    .then(({ users, questions, authedUser }) => {
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
      dispatch(getAuthedUser(authedUser));
    });
  };
}

export function handleUserAnswer({ id, authedUser, option }){
  return (dispatch) => {
    return saveQuestionAnswer({ id, authedUser, option })
    .then(() => dispatch(answerQuestion({id, authedUser, option})))
    .then(() => dispatch(answerUser({id, authedUser, option})));
    }
  }

  // dispatch(handleAddQuestion({ optionOneText, optionTwoText, author, poll }))
export function handleAddQuestion(info){
	return (dispatch) => {
		return saveQuestion(info)
    .then((question) => {
      dispatch(addQuestionToQuestions(question))
      return question
    })
    .then((question) => {
      console.log("question: " + JSON.stringify(question)) 
      const { author, id } = question
      dispatch(addQuestionToUser(author, id))
    })
    .catch((err) => console.log(err))
	}
}