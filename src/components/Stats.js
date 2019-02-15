import React, { Component } from "react";
import { connect } from "react-redux";

class Stats extends Component {
  render() {
    const { question, authedUser } = this.props;
    const { optionOne, optionTwo } = question;

    const percentage = function() {
      const votesQuestionOne = optionOne.votes.length;
      const votesQuestionTwo = optionTwo.votes.length;
      const allVotes = votesQuestionOne + votesQuestionTwo;
      const percentageOptionOne = Math.round(
        (votesQuestionOne / allVotes) * 100
      );
      const percentageOptionTwo = Math.round(
        (votesQuestionTwo / allVotes) * 100
      );
      return [percentageOptionOne, percentageOptionTwo];
    };

    const AuthedUsersChoice = function(option) {
      if (option.votes.includes(authedUser.id)) return "stats-highlight";
    };
    return (
      <div>
		  <span className={`margin-big stats-highlight`}>Your answer is highlighted green</span>
        <p className={`textpoll margin-big`}>{optionOne.text}</p>
        <p
          className={`textpoll margin-big ${AuthedUsersChoice(optionOne)}`}
        >{`votes: ${optionOne.votes.length}    (${percentage()[0]}%)`}</p>
        <p className={`textpoll margin-big`}>{optionTwo.text}</p>
        <p
          className={`textpoll margin-big ${AuthedUsersChoice(optionTwo)}`}
        >{`votes: ${optionTwo.votes.length}    (${percentage()[1]}%)`}</p>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { id } = ownProps;
  const { questions, authedUser } = state;

  const question = questions[id];

  return {
    question,
    authedUser
  };
}
export default connect(mapStateToProps)(Stats);
