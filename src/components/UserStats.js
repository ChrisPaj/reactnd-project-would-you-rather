import React, { Component } from "react";
import { connect } from "react-redux";

class UserStats extends Component {
  render() {
    return (
      <div className="outerpoll">
          <div className="innerpoll">
            <img
              src={avatar}
              alt={`Avatar of ${question.author}`}
              className="avatar"
            />
            <div className="poll-info">
              <div>
                <span>{question.author}</span>
                <div>{formatDate(question.timestamp)}</div>
                <p className="textpoll">{question.poll}</p>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { questions, users, authedUser } = state;
  const { id } = ownProps;
  const question = questions[id];
  const asker = question.author;
  const avatar = users[asker].avatarURL;
  return {
    question,
    avatar,
    authedUser
  };
}
export default connect(mapStateToProps)(UserStats);
