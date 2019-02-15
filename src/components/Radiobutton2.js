import React, { Component } from "react";

class Radiobutton2 extends Component {

  render() {
    return (
      <div>
        <form onChange={this.handleChange}>
          <input
            type="radio"
            name="option"
            value="optionOne"

          />
          {"optionOne"} <br />
          <input
            type="radio"
            name="option"
            value="optionTwo"
          />
          {"optionTwo"} <br />
          <input
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

export default Radiobutton2;
