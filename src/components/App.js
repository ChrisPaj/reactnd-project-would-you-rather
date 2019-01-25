import React, { Component } from 'react';
import Header from './Header';
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="App">
          <Header />
      </div>
    );
  }
}

export default connect()(App);
