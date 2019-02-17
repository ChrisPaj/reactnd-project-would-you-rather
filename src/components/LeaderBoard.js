import React, { Component } from "react";
import UserStats from "./UserStats";
import { connect } from "react-redux";

class LeaderBoard extends Component {
  render() {
    const { usersSorted } = this.props;
    return (
      <div>
        {usersSorted.map((user, id) => (
          <UserStats key={id} user={user}/>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { users } = state;

  var usersSorted = Object.values(users).sort(function(a, b) {
    return b.score - a.score;
  });
  return {
    usersSorted
  };
}

export default connect(mapStateToProps)(LeaderBoard);
