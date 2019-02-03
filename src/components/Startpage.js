import React, { Component } from "react";
import { connect } from "react-redux";
import Poll from "./Poll";
import { toggleShowPollsAnswered } from "../actions/authedUser";

class Startpage extends Component {
  render() {
    const { authedUser, questionIds, toggleOnClick } = this.props
    return (
      <div>
        {authedUser.id !== "" ? (
          <div>
          <button className="button" onClick={toggleOnClick}>
            {authedUser.showPollsAnswered ? "Toggle to Unanswered Polls" : "Toggle to Answered Polls"}
          </button>
          {questionIds.map(id => (
          <Poll key={id} id={id} />
        ))}
        </div>
        ) : null}
        
      </div>
    );
  }
}

Object.filter = (obj, predicate) =>
  Object.keys(obj)
    .filter(key => predicate(obj[key]))
    .reduce((res, key) => ((res[key] = obj[key]), res), {});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleOnClick: () => {
      console.log("button pressed");
      dispatch(toggleShowPollsAnswered());
    }
  };
};

function mapStateToProps(state) {
  const { questions, authedUser } = state;
  var filtered = Object.filter(questions, score => {
    return authedUser.showPollsAnswered
      ? score.optionOne.votes.includes(authedUser.id) ||
          score.optionTwo.votes.includes(authedUser.id)
      : !(
          score.optionOne.votes.includes(authedUser.id) ||
          score.optionTwo.votes.includes(authedUser.id)
        );
  });
  var questionIds = Object.keys(filtered);
  return {
    questionIds: questionIds.sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    authedUser
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Startpage);
