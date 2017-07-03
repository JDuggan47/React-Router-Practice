import React from 'react';
import { Link } from 'react-router'
import BackButton from './BackButton'

const NavBar = props => {
  return(
    <div>
    <BackButton />
    <h1>I HOPE THIS WORKS!</h1>
    {props.children}
    </div>
  )
}
export default NavBar;
