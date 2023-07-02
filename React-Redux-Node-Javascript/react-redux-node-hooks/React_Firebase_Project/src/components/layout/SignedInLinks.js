import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = (props) => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/create'>AddNewDisplay</NavLink></li>
        <li><NavLink to='/addplaylist'>Add Playlist</NavLink></li>
        <li><NavLink to='/upload'>Upload </NavLink></li>
        <li><NavLink to='/'>
          <span  onClick={props.userSignOut}>Log Out</span>
          </NavLink></li>
        <li><NavLink to='/' className="btn btn-floating blue lighten-10">{props.userData.email}</NavLink></li>
        <li><NavLink to='/profile' >Profile</NavLink></li>
        
      </ul>
    </div>
  )
}

export default SignedInLinks