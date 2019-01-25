import React, { Component } from "react";
import { connect } from "react-redux";
import Poll from './Poll'

class Startpage extends Component {
  render() {
    return (
      <div>
          {this.props.questionIds.map(id => (
            <Poll key={id} id={id} />
          ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { questions } = state;
  const questionIds = Object.keys(questions);
  return {
    questionIds: questionIds.sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    )
  };
}

export default connect(mapStateToProps)(Startpage);
