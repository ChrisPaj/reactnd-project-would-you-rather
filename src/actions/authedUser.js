export const GET_AUTHEDUSER = "GET_AUTHEDUSER"
export const TOGGLE_SHOW_POLLS_ANSWERED = "TOGGLE_SHOW_POLLS_ANSWERED"
export const CHANGE_AUTHED_USER = "CHANGE_AUTHED_USER"

export function getAuthedUser(authedUser){
	return {
		type: GET_AUTHEDUSER,
		authedUser
	}
}

export function toggleShowPollsAnswered(){
	return {
		type: TOGGLE_SHOW_POLLS_ANSWERED,
	}
}

export function changeAuthedUser(id){
	return {
		type: CHANGE_AUTHED_USER,
		id
	}
}