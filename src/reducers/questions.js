import { GET_QUESTIONS, ANSWER_QUESTION, ADD_QUESTION_TO_QUESTIONS } from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case ANSWER_QUESTION:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          [action.option]: {
            ...state[action.id][action.option],
            votes:  state[action.id][action.option].votes.concat(action.authedUser.id)
          }
        }
      };
      case ADD_QUESTION_TO_QUESTIONS:
      return {
        ...state,
        [action.question.id] : action.question
        };
    default:
      return state;
  }
}
