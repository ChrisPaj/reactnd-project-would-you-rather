import React, { Component } from "react";
import Poll from "./Poll";
import Stats from "./Stats";
import { connect } from "react-redux";

class PollStats extends Component {
  render() {
    return (
      <div>
        <Poll id={this.props.id}>
          <Stats id={this.props.id} />
        </Poll>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const { id } = props.match.params;

  return {
    id
  };
}
export default connect(mapStateToProps)(PollStats);