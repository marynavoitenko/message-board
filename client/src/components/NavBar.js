import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
  return (
    <div className="NavBar">
      <NavLink 
        className="NavLink"
        to="/"
      >
        Home
      </NavLink>
      <NavLink 
        className="NavLink" 
        to="/messages"
      >
        Messages
      </NavLink>
      <NavLink 
        className="NavLink"
        to="/messages/new"
      >
        Add Message
      </NavLink>
    </div>
  );
}

export default NavBar;
