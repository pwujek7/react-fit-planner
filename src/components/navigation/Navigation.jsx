import React from 'react';
import { connect, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { signOut } from '../../actions/authActions';

import AuthenticatedLinks from './AuthenticatedLinks';
import UnAuthenticatedLinks from './UnAuthenticatedLinks';

const Navigation = ({ logout }) => {
  const auth = useSelector(state => state.auth);
  const { isAuthenticated } = auth;

  const handleLogout = () => {
    logout();
  };

  const unAuthenticatedLinks = !isAuthenticated && <UnAuthenticatedLinks />;
  const authenticatedLinks = isAuthenticated
    && (
      <>
        <AuthenticatedLinks />
        <button type="button" onClick={handleLogout}>Logout</button>
      </>
    );

  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">Home</NavLink>
        </li>
        {unAuthenticatedLinks}
        {authenticatedLinks}
      </ul>
    </nav>
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
