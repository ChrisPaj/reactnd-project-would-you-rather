import React, { Component } from "react";
import { connect } from "react-redux";
import { changeAuthedUser } from "../actions/authedUser";

class Selectbox extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ id: event.target.value });
  }

  render() {
    return (
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Your Username:
          <select
            className="select"
            value={this.state.id}
            onChange={this.handleChange}
          >
            <option hidden disabeled="true" value="default">
              ---choose out of list and press Submit---
            </option>
            <option value="sarahedo">Sarah Edo</option>
            <option value="tylermcginnis">Tyler McGinnis</option>
            <option value="johndoe">John Doe</option>
            <option value="chrispa">Chris Pa</option>
          </select>
        </label>
        {this.state.id === "" ? null : (
          <input
            type="submit"
            value="Submit"
            onClick={() => {
							this.props.toggleOnClick(this.state.id)
							}}
          />
        )}
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleOnClick: username => {
      console.log("button pressed. username: " + username);
      dispatch(changeAuthedUser({ id: username }));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Selectbox);
