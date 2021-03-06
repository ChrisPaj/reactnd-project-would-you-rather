import { GET_USERS, USER_ANSWERS, ADD_NEW_ANSWER_TO_USER } from "../actions/users";

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
                [action.id]: action.option,},
              score: (state[action.authedUser.id].score + 1)
          }
      };
      case ADD_NEW_ANSWER_TO_USER:
      return {
        ...state,
        [action.id]: {
            ...state[action.id],
            questions: state[action.id].questions.concat([action.question]),
            score: (state[action.id].score + 1)
          }
      };
    default:
      return state;
  }
}
