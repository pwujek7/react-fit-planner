import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { selectAuth } from '../../selectors/authSelectors';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector(selectAuth);

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
