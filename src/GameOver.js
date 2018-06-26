import React from 'react';

const CHOICES = ['rock', 'paper', 'scissors'];

const GameOver = ({playerChoice, computerChoice, result, handleGameOverBtn}) => {
  return (
    <div style={{"marginTop": "20px"}}>
      You choose {CHOICES[playerChoice]}, computer chooses {CHOICES[computerChoice]}.
      <div style={{"marginTop": "20px"}}> Result: {result}!</div>
      <button style={{"marginTop": "20px"}} onClick={handleGameOverBtn}>OK</button>
    </div>
  );
}

export default GameOver;