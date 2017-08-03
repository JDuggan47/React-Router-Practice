import React from 'react';

const BattleShowTile = props => {
  return(
    <div>
      <h1>Name of Battle: {props.name}</h1>
      <h3>Location of Battle: {props.location}</h3>
      <h3>Winner of Battle: {props.winner}</h3>
    </div>
  )
}

export default BattleShowTile
