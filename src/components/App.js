import React, { Component } from "react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import Startpage from "./Startpage";
import Selectbox from "./Selectbox";
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
      <div className="app">
        <StyledHeader>
          <Nav />
          <Selectbox />
        </StyledHeader>
        {this.props.authedUser.id ? <Startpage /> : null}
      </div>
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
