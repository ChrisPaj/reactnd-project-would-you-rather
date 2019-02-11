import React, { Component } from "react";
import { connect } from "react-redux";
import Poll from "./Poll";
import Radiobutton from "./Radiobutton";
import NewPoll from "./NewPoll";
import { toggleShowPollsAnswered } from "../actions/authedUser";

class Startpage extends Component {
  render() {
    const { authedUser, questionIds, toggleOnClick } = this.props;
    return ( authedUser === "hello" ?
      (<div>
        <button className="togglebutton" onClick={toggleOnClick}>
          {authedUser.showPollsAnswered
            ? "Toggle to Unanswered Polls"
            : "Toggle to Answered Polls"}
        </button>
        {questionIds.map(id => (
          <Poll key={id} id={id}>
            <Radiobutton id={id}/>
          </Poll>
        ))}
      </div>)
      : <NewPoll />
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
  const { questions, authedUser, users } = state;
  const answeredQuestions = Object.keys(users[authedUser.id].answers);
  var filtered = Object.filter(questions, question => {
    return authedUser.showPollsAnswered
    ? answeredQuestions.includes(question.id)
    : !answeredQuestions.includes(question.id)
  });
  var questionIds = Object.keys(filtered);
  console.log("questionIds: " + questionIds)
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
