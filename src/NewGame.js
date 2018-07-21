import React from 'react';
import styled from 'styled-components';

const StartButton = styled.button`
  color: white;
  font-size: 1.2rem;
  font-family: 'Lato';
  text-transform: uppercase;
  letter-spacing: 1em;
  text-decoration: none;
  padding: .8em 1em calc(.8em + 3px);
  border-radius: 15px;
  background: rgba(84, 235, 223, 0.1);
  transition: 0.2s;
  border: 0;
  margin-top: 5%;
  width: 20rem;
  height: 5rem;

  &:hover {
    background: rgba(167, 52, 37, 0.1);
  }
`

const NewGame = ({handleStartBtn}) => {
  return (
    <StartButton onClick={handleStartBtn}>
        Start
    </StartButton>
  );
}

export default NewGame;