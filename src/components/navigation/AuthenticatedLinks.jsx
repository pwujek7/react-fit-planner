import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { StyledNavItem } from './Navigation';
import Icon from '../common/Icon';
import { ICONS, COLORS } from '../../constants/icons';

const AuthenticatedLinks = ({ onClose }) => {
  return (
    <>
      <StyledNavItem onClick={onClose}>
        <NavLink to="/settings" activeClassName="active">
          <Icon icon={ICONS.COG} size="32" color={COLORS.VERYLIGHTGRAY} />
          Settings
        </NavLink>
      </StyledNavItem>
      <StyledNavItem onClick={onClose}>
        <NavLink to="/day" activeClassName="active">
          <Icon icon={ICONS.CALENDAR} size="32" color={COLORS.VERYLIGHTGRAY} />
          Day
        </NavLink>
      </StyledNavItem>
    </>
  );
};

AuthenticatedLinks.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AuthenticatedLinks;
