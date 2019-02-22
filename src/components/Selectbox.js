import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { changeAuthedUser } from "../actions/authedUser";

class Selectbox extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "" };

    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  handleChange(event) {
    this.setState({ id: event.target.value });
  }
  logout(event){
    event.preventDefault();
    this.props.dispatch(changeAuthedUser({ id: "" }));
  }
  login(event){
    event.preventDefault();
    this.props.dispatch(changeAuthedUser({ id: this.state.id }));
  }

  render() {
    return (
      <form onSubmit={e => e.preventDefault()}>
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
        {this.state.id === "" ? null : (
          <Fragment>
            <input
              type="button"
              value="Submit"
              onClick={this.login}
            />
            <input
              type="button"
              value="Submit"
              onClick={this.logout}
            />
          </Fragment>
        )}
      </form>
    );
  }
}

export default connect()(Selectbox);
