import { GET_AUTHEDUSER } from "../actions/authedUser";

export default function authedUser(state = {}, action) {
  switch (action.type) {
    case GET_AUTHEDUSER:
      return {
        ...state,
        ...action.authedUser
      };
    default:
      return state;
  }
}