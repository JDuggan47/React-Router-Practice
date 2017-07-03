import React from 'react';
import { Link } from 'react-router'
import BackButton from './BackButton'

const NavBar = props => {
  return(
    <div>
    <BackButton />
    <Link to='/'>See All The Battles</Link>
    <Link to='/battles/new'>Add A New Battle!</Link>
    {props.children}
    </div>
  )
}
export default NavBar;
