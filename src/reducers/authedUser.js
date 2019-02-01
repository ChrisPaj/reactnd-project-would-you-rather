import {
  GET_AUTHEDUSER, TOGGLE_SHOW_POLLS_ANSWERED
} from "../actions/authedUser";

export default function authedUser(state = {}, action) {
  switch (action.type) {
    case GET_AUTHEDUSER:
      return {
        ...state,
        ...action.authedUser
      };
    case TOGGLE_SHOW_POLLS_ANSWERED:
      return {
        ...state,
        showPollsAnswered: !state.showPollsAnswered
      };
    default:
      return state;
  }
}
