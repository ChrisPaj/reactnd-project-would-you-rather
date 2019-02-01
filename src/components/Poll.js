import React, { Component } from 'react';
import { connect } from 'react-redux'

class Poll extends Component{
	render(){
		const { question, avatar } = this.props
		return(
    <div className='tweet'>
        <img
          src={avatar}
          alt={`Avatar of ${question.author}`}
          className='avatar'
        />
        <div className='tweet-info'>
          <div>
            <span>{question.author}</span>
            <div>{question.timestamp}</div>
            <p>{question.poll}</p>
          </div>
          <div className='tweet-icons'>
            
            <button onClick={this.handleLike}>
              click me
            </button>
          </div>
        </div>
      </div>)
	}
}

function mapStateToProps(state, ownProps){
	const { questions, users } = state
	const { id } = ownProps
	const question = questions[id]
	const asker = question.author
	const avatar = users[asker].avatarURL
	return {
		question,
		avatar
	}
}
export default connect(mapStateToProps)(Poll)