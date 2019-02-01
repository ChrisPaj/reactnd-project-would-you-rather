import { combineReducers } from 'redux'
import questions from './questions'
import users from './users'
import authedUser from './authedUser'
import hasAnswered from './hasAnswered'

export default combineReducers({
	questions,
	users,
	authedUser,
	hasAnswered
})