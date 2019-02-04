import React, { Component } from "react";
import { connect } from "react-redux";

class Radiobutton extends Component {
  render() {
    const { optionOne, optionTwo } = this.props
    return (
      <div>
        <form>
          <input type="radio" name="gender" value="male" className="radio"/> {optionOne} <br />
          <input type="radio" name="gender" value="female" className="radio"/> {optionTwo} <br />
          <input type="submit" value="Submit" className="btn"/>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  const { questions } = state
  const { id } = ownProps
  const optionOne = questions[id].optionOne.text
  const optionTwo = questions[id].optionTwo.text
  return {
    optionOne,
    optionTwo
  }
}

export default connect(mapStateToProps)(Radiobutton);
