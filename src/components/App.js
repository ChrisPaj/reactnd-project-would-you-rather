import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import Startpage from "./Startpage";
import Selectbox from "./Selectbox";
import PollAnswer from "./PollAnswer";
import PollStats from "./PollStats";
import NewPoll from "./NewPoll";
import Nav from "./Nav";
import styled from "styled-components";

const StyledHeader = styled.div`
  width: 100%;
  max-width: 590px;
  padding: 10px;
  display: flex;
  flex-direction: column
  margin: 0 auto;
  cursor: pointer;
`;

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
      <div className="app">
        <StyledHeader>
          <Nav />
          <Selectbox />
        </StyledHeader>
        {this.props.authedUser.id ? 
        <Route path="/" exact component={Startpage}></Route> : null}
        <Route path="/new" exact component={NewPoll}></Route>
        <Route path="/answerquestion/:id" component={PollAnswer}></Route>
        <Route path="/questionstats/:id" component={PollStats}></Route>
      </div>
      </Router>
    );
  }
}

function mapPropsToState(state) {
  const { authedUser } = state;
  return {
    authedUser
  };
}

export default connect(mapPropsToState)(App);
