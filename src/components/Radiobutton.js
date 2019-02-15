import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleUserAnswer } from "../actions/shared";

class Radiobutton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: "optionOne",
      redirect: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ option: event.target.value });
  }

  handleAnswer = e => {
    e.preventDefault();
    const { id, authedUser, dispatch } = this.props;
    const { option } = this.state;
    dispatch(handleUserAnswer({ id, authedUser, option }));
    this.setState({ redirect: true });
  };

  render() {
    const { optionOne, optionTwo, id } = this.props;
    const { redirect } = this.state;

    if (redirect === true) {
      return <Redirect to={`/questionstats/${id}`}/>
    }

    return (
      <div>
        <form onChange={this.handleChange}>
          <input
            type="radio"
            name="option"
            value="optionOne"
            className="radio"
            defaultChecked
          />
          {optionOne} <br />
          <input
            type="radio"
            name="option"
            value="optionTwo"
            className="radio"
          />
          {optionTwo} <br />
          <input
            type="submit"
            value="Submit"
            className="btn"
            onClick={this.handleAnswer}
          />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { questions, authedUser } = state;
  const { id } = ownProps;
  const optionOne = questions[id].optionOne.text;
  const optionTwo = questions[id].optionTwo.text;
  return {
    optionOne,
    optionTwo,
    authedUser
  };
}

/* function mapDispatchToProps(dispatch){
  return {
    answerQuestionOnClick: ({id, authedUser, option}) => {
      console.log("button pressed. id: " + id + " authedUser: " + authedUser.id + " option: " + option);
      dispatch(answerQuestion({id, authedUser, option}));
      dispatch(answerUser({id, authedUser, option}));
    }
  };
} */

export default connect(mapStateToProps)(Radiobutton);
