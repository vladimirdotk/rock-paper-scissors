import React, { Component } from 'react';
import Game from './Game';
import './App.css';
import styled from 'styled-components';

const AppRoot = styled.div`
  text-align: center;
  display: block;
`

const AppHeader = styled.header`
  padding: 20px;
`

const AppTitle = styled.h1`
  font-size: 1.4rem;
  margin-top: 50px;
  text-transform: uppercase;
  letter-spacing: 1em;
  text-shadow: 0 1px 2px black;
  font-family: "Helvetica Neue";
`

class App extends Component {
  render() {
    return (
      <AppRoot>
        <AppHeader>
          <AppTitle>
            Rock Paper Scissors
          </AppTitle>
        </AppHeader>
        <Game></Game>
      </AppRoot>
    );
  }
}

export default App;
