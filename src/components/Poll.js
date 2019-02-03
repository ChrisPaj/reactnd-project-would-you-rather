import React, { Component } from "react";
import { connect } from "react-redux";
import { formatDate } from '../utils/helpers'

class Poll extends Component {
  render() {
    const { question, avatar } = this.props;
    return (
      <div className="poll">
        <img
          src={avatar}
          alt={`Avatar of ${question.author}`}
          className="avatar"
        />
        <div className="tweet-info">
          <div>
            <span>{question.author}</span>
            <div>{formatDate(question.timestamp)}</div>
            <p>{question.poll}</p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { questions, users } = state;
  const { id } = ownProps;
  const question = questions[id];
  const asker = question.author;
  const avatar = users[asker].avatarURL;
  return {
    question,
    avatar
  };
}
export default connect(mapStateToProps)(Poll);
