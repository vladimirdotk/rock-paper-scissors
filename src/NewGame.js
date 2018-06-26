import React from 'react';

const NewGame = ({handleStartBtn}) => {
  return (
    <button style={{"marginTop": "20px"}} onClick={handleStartBtn}>
        Start
    </button>
  );
}

export default NewGame;