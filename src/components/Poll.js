import React, { Component } from "react";
import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import { Link } from 'react-router-dom'

class Poll extends Component {
  render() {
    const { question, avatar, children, id } = this.props;
    return (
      <Link to={`/questionstats/${id}`}>
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
                <span>{id}</span>
                <div>{formatDate(question.timestamp)}</div>
                <p className="textpoll">{question.poll}</p>
              </div>
            </div>
          </div>
          <div>{children}</div>
        </div>
      </Link>
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
