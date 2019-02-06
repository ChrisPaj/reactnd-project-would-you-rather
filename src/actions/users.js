export const GET_USERS = "GET_USERS"
export const USER_ANSWERS = "USER_ANSWERS"

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