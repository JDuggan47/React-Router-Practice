import React from 'react';
import { Link } from 'react-router'
import BackButton from './BackButton'

const NavBar = props => {
  return(
    <div className='row'>
      <ul className='menu align-center'>
        <BackButton />
        <Link to='/'>See All The Battles</Link>
        <Link to='/battles/new'>Add A New Battle!</Link>
        {props.children}
      </ul>
    </div>
  )
}
export default NavBar;
