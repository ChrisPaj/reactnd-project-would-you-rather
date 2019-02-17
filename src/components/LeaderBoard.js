import React, { Component } from "react";
import { connect } from "react-redux";

class LeaderBoard extends Component{
	render(){
		return(
			<div>

			</div>
		)
	}
}

function mapStateToProps(state, ownProps){
	const { users } = state
}

export default connect(mapStateToProps)(LeaderBoard)