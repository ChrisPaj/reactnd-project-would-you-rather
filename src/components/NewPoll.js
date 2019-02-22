import React, { Component } from "react";
import { handleAddQuestion } from "../actions/shared";
import { connect } from "react-redux";

class NewPoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preText: "Would you rather",
      optionOneText: "",
      optionTwoText: ""
    };
    this.handleAddAnswer = this.handleAddAnswer.bind(this);
    this.optionOneTextToLocalState = this.optionOneTextToLocalState.bind(this);
    this.optionTwoTextToLocalState = this.optionTwoTextToLocalState.bind(this);
  }

  optionOneTextToLocalState(event) {
    this.setState({ optionOneText: event.target.value });
  }
  optionTwoTextToLocalState(event) {
    this.setState({ optionTwoText: event.target.value });
  }
  handleAddAnswer(event) {
    const { dispatch, authedUser } = this.props;
    const { optionOneText, optionTwoText, preText } = this.state;
    const poll = preText + " " + optionOneText + " or " + optionTwoText + "?" 
    const author = authedUser.id;

    this.setState({ optionOneText: "", optionTwoText: "" });

    event.preventDefault();
    dispatch(handleAddQuestion({ optionOneText, optionTwoText, author, poll }));
  }

  render() {
    return (
      <div className="outerpoll">
        {this.props.authedUser.id !== "" 
        ?
        <form onChange={this.handleChange}>
          <h3 className="center">Would you rather...</h3>
          <input
            type="text"
            name="optionOneText"
            value={this.state.optionOneText}
            className={`innerpoll textpoll`}
            placeholder="(example: find €50 for yourself)"
            onChange={this.optionOneTextToLocalState}
          />
          <div className={`margin textpoll center`}>OR</div>
          <input
            type="text"
            name="optionTwoText"
            value={this.state.optionTwoText}
            className={`innerpoll textpoll`}
            placeholder="(example: have a good friend find €500)"
            onChange={this.optionTwoTextToLocalState}
          />
          <div className={`margin textpoll center`}>?</div>
          <input
            type="submit"
            value="Submit"
            className="btn"
            disabled={
              this.state.optionOneText === "" || this.state.optionTwoText === ""
            }
            onClick={this.handleAddAnswer}
          />
        </form>
        : null }
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { authedUser } = state;
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(NewPoll);
