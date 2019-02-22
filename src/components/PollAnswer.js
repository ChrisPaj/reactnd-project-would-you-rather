import React, { Component } from "react";
import Poll from "./Poll";
import Radiobutton from "./Radiobutton";
import { connect } from "react-redux";

class PollAnswer extends Component {
  render() {
    if (this.props.idValid === false) {
      return (
        <div className="outerpoll">
          <div className="innerpoll, textpoll, center">404</div>
        </div>
      );
    }
    return (
      <div>
        <Poll id={this.props.id}>
          <Radiobutton id={this.props.id} />
        </Poll>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const { id } = props.match.params;
  const { questions } = state;
  const allQuestionIds = Object.keys(questions);
  const isParamIdInAllQuestions = allQuestionIds.includes(id);
  // console.log(isParamIdInAllQuestions)

  return {
    id,
    idValid: isParamIdInAllQuestions
  };
}
export default connect(mapStateToProps)(PollAnswer);
