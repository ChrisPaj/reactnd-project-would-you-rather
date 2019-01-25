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
          {this.props.questionIds.map((id) => (
            <div key={id}>{id}</div>
          ))}
      </div>
    );
  }
}

function mapStateToProps(state){
  const { questions } = state
  const questionIds = Object.keys(questions)
  return({
    questionIds: questionIds
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  })
}

export default connect(mapStateToProps)(App);
