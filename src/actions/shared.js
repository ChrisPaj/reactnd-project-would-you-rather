import { getInitialData, saveQuestionAnswer } from "../utils/api";
import { getQuestions, answerQuestion } from "./questions";
import { getAuthedUser,  } from "./authedUser";
import { getUsers, answerUser } from "./users";

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

/* export function handleUserAnswer({ id, authedUser, option }){
  return (dispatch) => {
    return saveQuestionAnswer({ id, authedUser, option })
    .then(() => {
      dispatch(answerQuestion({id, authedUser, option}));
      dispatch(answerUser({id, authedUser, option}));
    });
  };
} */

export function handleUserAnswer(info){
  return (dispatch) => {
      dispatch(answerQuestion(info));
      dispatch(answerUser(info));
  };
}