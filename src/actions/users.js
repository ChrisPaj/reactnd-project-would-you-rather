export const GET_USERS = "GET_USERS"
export const USER_ANSWERS = "USER_ANSWERS"
export const ADD_NEW_ANSWER_TO_USER = "ADD_NEW_ANSWER_TO_USER"

export function getUsers(users){
	return {
		type: GET_USERS,
		users
	}
}
export function answerUser({id, authedUser, option}){
	return {
		type: USER_ANSWERS,
		id,
		authedUser, 
		option
	}
}

export function addQuestionToUser(id, questionId){
	return {
		type: ADD_NEW_ANSWER_TO_USER,
		id,
		question: questionId,
	}
}