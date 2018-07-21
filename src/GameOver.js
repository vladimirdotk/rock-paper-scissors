import React from 'react';

const CHOICES = ['rock', 'paper', 'scissors'];

const GameOver = ({playerChoice, computerChoice, result, handleGameOverBtn}) => {
    return (
        <div className="result">
            You choose {CHOICES[playerChoice]}, computer chooses {CHOICES[computerChoice]}.
            <div> Result: {result}!</div>
            <button className="restart" onClick={handleGameOverBtn}>OK</button>
        </div>
    );
}

export default GameOver;