import { GET_USERS, USER_ANSWERS } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users
      };
    case USER_ANSWERS:
      return {
        ...state,
        [action.authedUser.id]: {
            ...state[action.authedUser.id],
              answers: {
                ...state[action.authedUser.id]["answers"],
                [action.id]: action.option,}
          }
      };
    default:
      return state;
  }
}
