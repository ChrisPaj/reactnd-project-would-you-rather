import React, { Component } from "react";
import { connect } from "react-redux";

class UserStats extends Component {
  render() {
    const { user } = this.props;
    const { id, avatarURL, questions, answers, score, name } = user;
    const questionsAsked = questions.length;
    const questionsAnswered = Object.keys(answers).length;
    return (
      <div className="outerpoll">
        <div className="innerpoll">
          <img src={avatarURL} alt={`Avatar of ${id}`} className="avatar" />
          <div className="poll-info">
            <div>
              <div className="textpoll">{"Name: " + name}</div>
              <div>{"Questions asked: " + questionsAsked}</div>
              <div>{"Questions answered : " + questionsAnswered}</div>
              <div>{"Score: " + score}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(UserStats);
