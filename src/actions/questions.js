export const GET_QUESTIONS = "GET_QUESTIONS"
export const ANSWER_QUESTION = "ANSWER_QUESTION"

export function getQuestions(questions){
	return {
		type: GET_QUESTIONS,
		questions
	}
}

export function answerQuestion({id, authedUser, option}){
	return {
		type: ANSWER_QUESTION,
		id,
		authedUser,
		option
	}
}

