import { GET_AUTHEDUSER } from "../actions/authedUser";

export default function users(state = {}, action) {
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