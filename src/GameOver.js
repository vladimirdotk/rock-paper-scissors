import React from 'react';
import Result from './Result'
import styled from 'styled-components'

const CHOICES = ['rock', 'paper', 'scissors'];

const RestartButton = styled.button`
  color: white;
  display: inline-block;
  margin: 40px;
  width: 70px;
  height: 40px;
  background: rgba(84, 235, 223, 0.1);
  cursor: pointer;
  border: 0;
`
const GameOver = ({playerChoice, computerChoice, result, handleGameOverBtn}) => {
  return (
    <Result>
      You choose {CHOICES[playerChoice]}, computer chooses {CHOICES[computerChoice]}.
      <div> Result: {result}!</div>
      <RestartButton onClick={handleGameOverBtn}>OK</RestartButton>
    </Result>
  );
}

export default GameOver;