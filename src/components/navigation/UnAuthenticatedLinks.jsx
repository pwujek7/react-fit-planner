import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { StyledNavItem } from './Navigation';
import Icon from '../common/Icon';
import { ICONS } from '../../constants/icons';
import { COLOR } from '../../constants/styles';

const UnAuthenticatedLinks = ({ onClose }) => {
  return (
    <>
      <StyledNavItem onClick={onClose}>
        <NavLink to="/register" activeClassName="active">
          <Icon icon={ICONS.PLUS} size="32" color={COLOR.VERYLIGHTGRAY} />
          Register
        </NavLink>
      </StyledNavItem>
      <StyledNavItem onClick={onClose}>
        <NavLink to="/login" activeClassName="active">
          <Icon icon={ICONS.ENTER} size="32" color={COLOR.VERYLIGHTGRAY} />
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
