import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTES } from '../../constants/routes';

import PrivateRoute from './PrivateRoute';
import LoadingIndicator from '../common/LoadingIndicator';

const Login = lazy(() => import('../login/Login'));
const Register = lazy(() => import('../register/Register'));
const Page404 = lazy(() => import('../page404/Page404'));

const Routes = () => (
  <Suspense fallback={<LoadingIndicator />}>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      {
        ROUTES.map(route => (
          <PrivateRoute
            key={route.path}
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        ))
      }
      <Route>
        <Page404 />
      </Route>
    </Switch>
  </Suspense>
);

export default Routes;
