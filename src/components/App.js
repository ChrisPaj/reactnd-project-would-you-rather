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
      <div className="test">
        <StyledHeader>
          <Nav />
          <Selectbox />
        </StyledHeader>
        <Startpage />
      </div>
    );
  }
}

export default connect()(App);
