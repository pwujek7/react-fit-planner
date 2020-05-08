import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { StyledNavItem } from './Navigation';
import Icon from '../common/Icon';
import { ICONS } from '../../constants/icons';
import { COLOR } from '../../constants/styles';

import { selectDayByCurrentDate } from '../../selectors/daysSelectors';

const AuthenticatedLinks = ({ onClose }) => {
  const day = useSelector(selectDayByCurrentDate);
  const { id } = day[0] || {};
  const route = id ? `/day/${id}` : '/day';

  return (
    <>
      <StyledNavItem onClick={onClose}>
        <NavLink to="/settings" activeClassName="active">
          <Icon icon={ICONS.COG} size="32" color={COLOR.VERYLIGHTGRAY} />
          Settings
        </NavLink>
      </StyledNavItem>
      <StyledNavItem onClick={onClose}>
        <NavLink to={route} activeClassName="active">
          <Icon icon={ICONS.CALENDAR} size="32" color={COLOR.VERYLIGHTGRAY} />
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
