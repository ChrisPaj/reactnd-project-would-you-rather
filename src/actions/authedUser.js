export const GET_AUTHEDUSER = "GET_AUTHEDUSER"

export function getAuthedUser(authedUser){
	return {
		type: GET_AUTHEDUSER,
		authedUser
	}
}