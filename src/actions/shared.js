import { getInitialData } from "../utils/api";
import { getQuestions } from "./questions";
import { getAuthedUser } from "./authedUser";
import { getUsers } from "./users";

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
