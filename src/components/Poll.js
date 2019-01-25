import React, { Component } from 'react';
import { connect } from 'react-redux'

class Poll extends Component{
	render(){
		return(<div>{this.props.question.poll}</div>)
	}
}

function mapStateToProps(state, ownProps){
	const { questions } = state
	const { id } = ownProps
	const question = questions[id]
	return {
		question
	}
}
export default connect(mapStateToProps)(Poll)