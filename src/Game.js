import React, { Component } from 'react';

const STATUS_STOPPED = 0;
const STATUS_PLAYING = 1;

const RESULT_WIN = "You win";
const RESULT_LOOSE = "You loose";
const RESULT_TIE = "It's a draw";

const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

const CHOICES = ['rock', 'paper', 'scissors'];

class Game extends Component {

  state = {
    status: STATUS_STOPPED,
    previousResult: null
  };

  handleStartBtn = () => {
    this.setState({
      status: STATUS_PLAYING
    });
  }

  handleChoiceBtn = (playerChoice) => {
    const compChoice = this.getComputerChoice();
    const gameResult = this.getGameResult(playerChoice, compChoice);

    alert(
      `You choose ${CHOICES[playerChoice]}, computer choose ${CHOICES[compChoice]}.
      Result: ${gameResult}!`
    );  

    this.setState({
      status: STATUS_STOPPED,
      previousResult: gameResult
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
    if (this.state.previousResult) {
      return (
        <div style={styles.twentyFromTop}>
          Your previous result: {this.state.previousResult}
        </div>
      );
    }
  }

  renderPlaying = () => {
    return(
      <div style={styles.twentyFromTop}>
        Make your choice:
        <br/>
        <br/>
        <button onClick={() => this.handleChoiceBtn(ROCK)}>Rock</button>
        <br/>
        <button onClick={() => this.handleChoiceBtn(PAPER)}>Paper</button>
        <br/>
        <button onClick={() => this.handleChoiceBtn(SCISSORS)}>Scissors</button>
      </div>
    );
  }

  renderStoppped = () => {
    return (
      <button style={styles.twentyFromTop} onClick={this.handleStartBtn}>
        Start
      </button>
    );
  }

  getMainRenderData = () => {
    if (this.state.status === STATUS_STOPPED) {
      return this.renderStoppped();
    }
    if (this.state.status === STATUS_PLAYING) {
      return this.renderPlaying();
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

const styles = {
  twentyFromTop: {
    marginTop: "20px"
  }
};