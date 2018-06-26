import React from 'react';

const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

const Play = ({handleChoiceBtn}) => {
  return (
    <div style={{"marginTop": "20px"}}>
        Make your choice:
        <br/>
        <br/>
        <button onClick={() => handleChoiceBtn(ROCK)}>Rock</button>
        <br/>
        <button onClick={() => handleChoiceBtn(PAPER)}>Paper</button>
        <br/>
        <button onClick={() => handleChoiceBtn(SCISSORS)}>Scissors</button>
      </div>
  );
}

export default Play;