import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { StyledNavItem } from './Navigation';

const UnAuthenticatedLinks = ({ onClose }) => {
  return (
    <>
      <StyledNavItem onClick={onClose}>
        <NavLink to="/register">Register</NavLink>
      </StyledNavItem>
      <StyledNavItem onClick={onClose}>
        <NavLink to="/login">Login</NavLink>
      </StyledNavItem>
    </>
  );
};

UnAuthenticatedLinks.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default UnAuthenticatedLinks;
