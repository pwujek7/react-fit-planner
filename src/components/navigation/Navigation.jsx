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
import Logo from '../common/Logo';
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

    &::before {
      content: '';
      width: 100%;
      height: 50px;
      background-color: ${({ theme }) => theme.color.veryLightGray};
      position: absolute;
      top: 0px;
      left: 0;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.l}) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 50px;
    padding: 0;
    position: relative;
    background-color: ${({ theme }) => theme.color.white};

    &::before {
      content: '';
      display: none;
    }
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
      font-weight: ${({ theme }) => theme.font.size.medium};
      height: 100px;
      text-decoration: none;
      padding: 0 0 15px 0;

      &:link, &:visited, &:hover, &:active {
        color: ${({ theme }) => theme.color.veryLightGray};
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.l}) {
    & > a {
      display: inline-block;
      text-decoration: none;
      height: 50px;
      line-height: 50px;
      padding: 0 32px 0 0;
      color: ${({ theme }) => theme.color.gray};

      &.active {
        color: ${({ theme }) => theme.color.darkBlue} !important;
      }

      & > svg {
        display: none;
      }

      &:link, &:visited {
        color: ${({ theme }) => theme.color.gray};
      }

      &:hover {
        color: ${({ theme }) => theme.color.darkBlue};
      }
    }
  }
`;

const StyledNavLogo = styled(NavLink)`
  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    position: absolute;
    top: 1px;
    left: 10px;
    z-index: 110;
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
    display: inline-block;
    text-decoration: none;
    height: 50px;
    line-height: 50px;
    width: 100px;
    position: relative;
    color: ${({ theme }) => theme.color.gray};
    background-color: ${({ theme }) => theme.color.veryLightGray};
    transition: all .25s ease-in-out;

    &::before {
      content: 'Logout';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &:hover {
      color: ${({ theme }) => theme.color.veryLightGray};
      background-color: ${({ theme }) => theme.color.darkBlue};
    }

    & > svg {
      display: none;
    }
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
            ? <Icon icon={ICONS.CROSS} size="28" color={COLORS.DARKBLUE} />
            : <Icon icon={ICONS.MENU} size="32" color={COLORS.DARKBLUE} />
        }
      </StyledNavToggle>
      <StyledNavLogo exact to="/">
        <Logo isTextVisible={isExpanded} />
      </StyledNavLogo>
      <StyledNavList isExpanded={isExpanded}>
        <StyledNavItem onClick={closeNavigation}>
          <NavLink exact to="/" activeClassName="active">
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
