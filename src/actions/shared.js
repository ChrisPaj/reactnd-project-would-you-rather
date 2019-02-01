import { getInitialData } from "../utils/api";
import { getQuestions } from "./questions";
import { getAuthedUser } from "./authedUser";
import { getHasAnswered } from "./hasAnswered";
import { getUsers } from "./users";

export function handleInitialData() {
  return dispatch => {
    return getInitialData()
    .then(({ users, questions, authedUser, hasAnswered }) => {
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
      dispatch(getAuthedUser(authedUser));
      dispatch(getHasAnswered(hasAnswered));
    });
  };
}
