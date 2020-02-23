import React from 'react';
import { NavLink } from 'react-router-dom';

const UnAuthenticatedLinks = () => {
  return (
    <>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );
};

export default UnAuthenticatedLinks;
