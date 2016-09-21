import React, { Component } from 'react';
import NavBar from '../components/NavBar'
import HomePage from './HomePage'
import { Match, Miss, Redirect } from 'react-router'

class App extends Component {
  render() {
    return (
        <div className="App">
          <NavBar />
          <Match exactly pattern="/" component={HomePage}/>
          <Match pattern="/browse" component={HomePage}/>
          <Miss component={() => <Redirect to="/browse"/>} />
        </div>
    );
  }
}

export default App
