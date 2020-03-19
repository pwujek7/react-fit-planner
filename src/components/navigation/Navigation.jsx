import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { selectAuth } from '../../selectors/selectors';

import { signOut } from '../../actions/authActions';

import AuthenticatedLinks from './AuthenticatedLinks';
import UnAuthenticatedLinks from './UnAuthenticatedLinks';

const StyledNavBar = styled.nav`
  position: relative;
  height: 50px;
`;

const StyledNavList = styled.ul`
  list-style-type: none;
  text-decoration: none;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    display: ${props => (props.isExpanded ? 'grid' : 'none')};
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 100px);
    grid-gap: 20px;
    width: 100vw;
    height: 100vh;
    padding: 50px 0 0 0;
    background-color: #f5f5f5;
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
    line-height: 100px;
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

const StyledNavToggle = styled.span`
  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
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
  background-color: transparent;
  outline: none;
  cursor: pointer;

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
        <StyledNavLogout type="button" onClick={handleLogout}>Logout</StyledNavLogout>
      </>
    );

  return (
    <StyledNavBar>
      <StyledNavToggle onClick={toggleNavigation}>Toggle</StyledNavToggle>
      <StyledNavLogo exact to="/">Logo</StyledNavLogo>
      <StyledNavList isExpanded={isExpanded}>
        <StyledNavItem onClick={closeNavigation}>
          <NavLink exact to="/">Home</NavLink>
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
