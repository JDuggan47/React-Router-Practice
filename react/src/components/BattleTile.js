import React from 'react';
import { Link } from 'react-router';

const BattleTile = props => {
  return(
    <div>
      <Link to={`/battles/${props.id}`}><h1>{props.name}</h1></Link>
    </div>
  )
}

export default BattleTile
