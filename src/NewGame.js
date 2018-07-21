import React from 'react';

const NewGame = ({handleStartBtn}) => {
  return (
    <button className="Start-button" onClick={handleStartBtn}>
        Start
    </button>
  );
}

export default NewGame;