import React, { Component } from "react";
import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import { Link } from "react-router-dom";

class Poll extends Component {
  render() {
    const { question, avatar, children, id, authedUser } = this.props;
    const hasPollBeenAnswered = authedUser.showPollsAnswered
      ? "questionstats"
      : "answerquestion";
    return (
      <div className="outerpoll">
        <Link to={`/${hasPollBeenAnswered}/${id}`}>
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
        </Link>
        <div>{children}</div>
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
export default connect(mapStateToProps)(Poll);
