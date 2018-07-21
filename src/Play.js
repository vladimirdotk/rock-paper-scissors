import React from 'react';

const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

const Play = ({handleChoiceBtn}) => {
    return (
        <div className="Play-body">
            Make your choice:
            <div className="row">
                <button className="Rock-button block" onClick={() => handleChoiceBtn(ROCK)}>Rock</button>
                <button className="Paper-button block" onClick={() => handleChoiceBtn(PAPER)}>Paper</button>
                <button className="Scissors-button block" onClick={() => handleChoiceBtn(SCISSORS)}>Scissors</button>
            </div>
        </div>
    );
}

export default Play;