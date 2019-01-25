import React, { Component } from 'react';
import Header from './Header';
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import Startpage from './Startpage'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="App">
          <Header />
          <Startpage />
      </div>
    );
  }
}

export default connect()(App);
