export const GET_HASANSWERED = "GET_HASANSWERED"
export const TOGGLE_HASANSWERED = "TOGGLE_HASANSWERED"

export function getHasAnswered(hasAnswered){
	return {
		type: GET_HASANSWERED,
		hasAnswered
	}
}

export function toggleHasAnswered(){
	return {
		type: TOGGLE_HASANSWERED,
	}
}
