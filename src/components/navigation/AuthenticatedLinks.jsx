import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { StyledNavItem } from './Navigation';

const AuthenticatedLinks = ({ onClose }) => {
  return (
    <>
      <StyledNavItem onClick={onClose}>
        <NavLink to="/settings">Settings</NavLink>
      </StyledNavItem>
      <StyledNavItem onClick={onClose}>
        <NavLink to="/day">Day</NavLink>
      </StyledNavItem>
    </>
  );
};

AuthenticatedLinks.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AuthenticatedLinks;
