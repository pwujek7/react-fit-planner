import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { selectAuth } from '../../selectors/selectors';
import { signOut } from '../../actions/authActions';

import AuthenticatedLinks from './AuthenticatedLinks';
import UnAuthenticatedLinks from './UnAuthenticatedLinks';

import Icon from '../common/Icon';
import { ICONS, COLORS } from '../../constants/icons';

const StyledNavBar = styled.nav`
  position: relative;
  height: 50px;
`;

const StyledNavList = styled.ul`
  list-style-type: none;
  text-decoration: none;
  position: relative;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    display: ${props => (props.isExpanded ? 'grid' : 'none')};
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 100px);
    grid-gap: 20px;
    width: 100vw;
    height: 100vh;
    padding: 75px 20px 0 20px;
    background-color: ${({ theme }) => theme.color.darkBlue};
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.l}) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 50px;
    padding: 0;
    position: relative;
  }
`;

export const StyledNavItem = styled.li`
  text-align: center;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    & > a {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      height: 100px;
      text-decoration: none;
      padding: 0 0 15px 0;
    }

    & > a:link, a:visited, a:hover, a:active {
      color: ${({ theme }) => theme.color.veryLightGray}
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.l}) {
    line-height: 50px;
    margin: 0 20px 0 0;
  }
`;

const StyledNavLogo = styled(NavLink)`
  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 90;
  }
`;

const StyledNavToggle = styled.div`
  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 110;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.l}) {
    display: none;
  }
`;

const StyledNavLogout = styled.button`
  border: none;
  outline: none;
  cursor: pointer;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    color: ${({ theme }) => theme.color.darkBlue};
    background-color: ${({ theme }) => theme.color.veryLightGray};
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;

    & > svg {
      height: 50px;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.l}) {
    margin: 0 20px 0 0;
  }
`;

const Navigation = ({ logout }) => {
  const auth = useSelector(selectAuth);
  const { isAuthenticated } = auth;
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLogout = () => {
    logout();
  };

  const toggleNavigation = () => {
    setIsExpanded(!isExpanded);
  };

  const closeNavigation = () => {
    setIsExpanded(false);
  };

  const unAuthenticatedLinks = !isAuthenticated
    && <UnAuthenticatedLinks onClose={closeNavigation} />;
  const authenticatedLinks = isAuthenticated
    && (
      <>
        <AuthenticatedLinks onClose={closeNavigation} />
        <StyledNavLogout type="button" onClick={handleLogout}>
          <Icon icon={ICONS.EXIT} size="32" color={COLORS.DARKBLUE} />
        </StyledNavLogout>
      </>
    );

  return (
    <StyledNavBar>
      <StyledNavToggle onClick={toggleNavigation}>
        {
          isExpanded
            ? <Icon icon={ICONS.CROSS} size="28" color={COLORS.VERYLIGHTGRAY} />
            : <Icon icon={ICONS.MENU} size="32" color={COLORS.DARKBLUE} />
        }
      </StyledNavToggle>
      <StyledNavLogo exact to="/">Logo</StyledNavLogo>
      <StyledNavList isExpanded={isExpanded}>
        <StyledNavItem onClick={closeNavigation}>
          <NavLink exact to="/">
            <Icon icon={ICONS.HOME} size="32" color={COLORS.VERYLIGHTGRAY} />
            Home
          </NavLink>
        </StyledNavItem>
        {unAuthenticatedLinks}
        {authenticatedLinks}
      </StyledNavList>
    </StyledNavBar>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(signOut())
  };
};

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Navigation);
