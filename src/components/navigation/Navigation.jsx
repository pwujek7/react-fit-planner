import React from 'react';
import { connect, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { signOut } from '../../actions/authActions';

const Navigation = ({ logout }) => {
  const auth = useSelector(state => state.auth);

  const handleLogout = () => {
    logout();
  };

  const isLoggedIn = () => {
    return auth.isAuthenticated
      ? <button type="button" onClick={handleLogout}>Logout</button>
      : <NavLink to="/login">Login</NavLink>;
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/settings">Settings</NavLink>
        </li>
        <li>
          {
            isLoggedIn()
          }
        </li>
      </ul>
    </nav>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(signOut())
  };
};

export default connect(null, mapDispatchToProps)(Navigation);
