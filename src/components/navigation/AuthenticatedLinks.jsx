import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthenticatedLinks = () => {
  return (
    <>
      <li>
        <NavLink to="/settings">Settings</NavLink>
      </li>
      <li>
        <NavLink to="/day">Day</NavLink>
      </li>
    </>
  );
};

export default AuthenticatedLinks;
