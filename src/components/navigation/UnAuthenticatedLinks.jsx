import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { StyledNavItem } from './Navigation';
import Icon from '../common/Icon';
import { ICONS, COLORS } from '../../constants/icons';

const UnAuthenticatedLinks = ({ onClose }) => {
  return (
    <>
      <StyledNavItem onClick={onClose}>
        <NavLink to="/register">
          <Icon icon={ICONS.PLUS} size="32" color={COLORS.VERYLIGHTGRAY} />
          Register
        </NavLink>
      </StyledNavItem>
      <StyledNavItem onClick={onClose}>
        <NavLink to="/login">
          <Icon icon={ICONS.ENTER} size="32" color={COLORS.VERYLIGHTGRAY} />
          Login
        </NavLink>
      </StyledNavItem>
    </>
  );
};

UnAuthenticatedLinks.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default UnAuthenticatedLinks;
