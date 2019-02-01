import { GET_HASANSWERED, TOGGLE_HASANSWERED } from "../actions/hasAnswered";

export default function hasAnswered(state = {}, action) {
  switch (action.type) {
    case GET_HASANSWERED:
      return {
        ...state,
        ...action.hasAnswered
      };
    case TOGGLE_HASANSWERED:
      return {
        ...state,
        hasAnswered: !state.hasAnswered
      };
    default:
      return state;
  }
}
