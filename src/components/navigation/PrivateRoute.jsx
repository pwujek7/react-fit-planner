import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector(state => state.auth);

  return (
    <Route {...rest}>
      {
        auth.isAuthenticated
          ? <Component />
          : <Redirect to="/login" />
      }
    </Route>
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired
};

export default PrivateRoute;
