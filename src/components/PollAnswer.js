import React, { Component } from "react";
import Poll from "./Poll";
import Radiobutton from "./Radiobutton";
import { connect } from "react-redux";

class PollAnswer extends Component {
  render() {
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

  return {
    id
  };
}
export default connect(mapStateToProps)(PollAnswer);
