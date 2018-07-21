import React, { Component } from 'react';
import NewGame from './NewGame';
import Play from './Play';
import GameOver from './GameOver';
import Result from './Result'

const STATUS_NEW = 0;
const STATUS_PLAYING = 1;
const STATUS_GAME_OVER = 2;

const RESULT_WIN = "You win";
const RESULT_LOOSE = "You loose";
const RESULT_TIE = "It's a draw";

const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

const CHOICES = ['rock', 'paper', 'scissors'];

class Game extends Component {

  state = {
    status: STATUS_NEW,
    result: null,
    playerChoice: null,
    computerChoice: null
  };

  handleStartBtn = () => {
    this.setState({
      status: STATUS_PLAYING
    });
  }

  handleChoiceBtn = (playerChoice) => {
    const computerChoice = this.getComputerChoice();
    const gameResult = this.getGameResult(playerChoice, computerChoice);

    this.setState({
      status: STATUS_GAME_OVER,
      result: gameResult,
      playerChoice: playerChoice,
      computerChoice: computerChoice
    });
  }

  handleGameOverBtn = () => {
    this.setState({
      status: STATUS_NEW,
      playerChoice: null,
      computerChoice: null
    });
  }

  getGameResult(playerChoice, compChoice) {
    
    if (playerChoice === compChoice) {
      return RESULT_TIE;
    }

    if (
      (playerChoice === ROCK && compChoice === SCISSORS)
      || (playerChoice === PAPER && compChoice === ROCK)
      || (playerChoice === SCISSORS && compChoice === PAPER)
    ) {
      return RESULT_WIN;
    }

    return RESULT_LOOSE;
  }

  getComputerChoice = () => {
    return Math.floor(Math.random() * CHOICES.length);
  }

  renderPreviousResult = () => {
    if (this.state.result && this.state.status !== STATUS_GAME_OVER) {
      return (
        <Result>
          Previous result: {this.state.result}
        </Result>
      );
    }
  }

  getMainRenderData = () => {
    if (this.state.status === STATUS_NEW) {
      return (
        <NewGame handleStartBtn={this.handleStartBtn}/>
      );
    }

    if (this.state.status === STATUS_PLAYING) {
      return (
        <Play handleChoiceBtn={this.handleChoiceBtn}/>
      );
    }

    if (this.state.status === STATUS_GAME_OVER) {
      return (
        <GameOver
          playerChoice={this.state.playerChoice}
          computerChoice={this.state.computerChoice}
          result={this.state.result}
          handleGameOverBtn={this.handleGameOverBtn}
        />
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.getMainRenderData()}
        {this.renderPreviousResult()}
      </React.Fragment>
    );    
  }
}

export default Game;
