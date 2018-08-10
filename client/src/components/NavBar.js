import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
  return (
    <div className="container">
      <div className="NavBar">
        <NavLink 
          className="NavLink"
          to="/"
          exact
        >
          Home
        </NavLink>
        <NavLink 
          className="NavLink" 
          to="/messages"
          exact
        >
          Messages
        </NavLink>
        <NavLink 
          className="NavLink"
          to="/messages/new"
          exact
        >
          Add Message
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
