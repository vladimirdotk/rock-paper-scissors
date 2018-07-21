import React from 'react';
import styled from 'styled-components';

const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

const PlayBody = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.8em;
`

const Row = styled.div`
  margin-top: 2%;
`

const ButtonBlock = styled.button`
  color: white;
  display: inline-block;
  width: 5rem;
  height: 5rem;
  margin: 1rem;
  background: rgba(84, 235, 223, 0.1);
  cursor: pointer;
  border-radius: 50%;
  border: 0;

  &:hover {
    background: rgba(167, 52, 37, 0.1);
  }
`

const Play = ({handleChoiceBtn}) => {
    return (
        <PlayBody>
            Make your choice:
            <Row>
                <ButtonBlock onClick={() => handleChoiceBtn(ROCK)}>Rock</ButtonBlock>
                <ButtonBlock onClick={() => handleChoiceBtn(PAPER)}>Paper</ButtonBlock>
                <ButtonBlock onClick={() => handleChoiceBtn(SCISSORS)}>Scissors</ButtonBlock>
            </Row>
        </PlayBody>
    );
}

export default Play;