import React, { Component } from "react";
import { connect } from "react-redux";
import { answerQuestion } from "../actions/questions";
import { answerUser } from "../actions/users";
import { handleUserAnswer } from "../actions/shared";

class Radiobutton extends Component {
  constructor(props) {
    super(props);
    this.state = { option: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ option: event.target.value });
  }

  handleAnswer = (e) =>{
    e.preventDefault()
    const { id, authedUser, dispatch } = this.props
    const { option } = this.state
    dispatch(handleUserAnswer({id, authedUser, option}))
  }

  render() {
    const { optionOne, optionTwo, authedUser, id } = this.props
    const { option } = this.state
    return (
      <div>
        <form onChange={this.handleChange}>
          <input type="radio" name="option" value="optionOne" className="radio"/> {optionOne} <br />
          <input type="radio" name="option" value="optionTwo" className="radio"/> {optionTwo} <br />
          <input type="submit" value="SubmitTest" className="btn" onClick={this.handleAnswer}/>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  const { questions, authedUser } = state
  const { id } = ownProps
  const optionOne = questions[id].optionOne.text
  const optionTwo = questions[id].optionTwo.text
  return {
    optionOne,
    optionTwo,
    authedUser
  }
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
