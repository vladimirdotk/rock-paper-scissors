import React, { Component } from 'react';
import Game from './Game';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Rock Paper Scissors</h1>
        </header>
        <Game></Game>
      </div>
    );
  }
}

export default App;
