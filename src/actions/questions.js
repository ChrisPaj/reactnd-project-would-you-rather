export const GET_QUESTIONS = "GET_QUESTIONS"
export const ANSWER_QUESTION = "ANSWER_QUESTION"
export const ADD_QUESTION_TO_QUESTIONS = "ADD_QUESTION_TO_QUESTIONS"

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

export function addQuestionToQuestions(question){
	return {
		type: ADD_QUESTION_TO_QUESTIONS,
		question
	}
}

