import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from './store/store';

import { ROUTES } from './constants/routes';

import Navigation from './components/navigation/Navigation';
import PrivateRoute from './components/navigation/PrivateRoute';
import LoadingIndicator from './components/common/LoadingIndicator';
import Theme from './theme/Theme';
import GlobalStyle from './theme/globalStyles';

const Login = lazy(() => import('./components/login/Login'));
const Register = lazy(() => import('./components/register/Register'));
const Page404 = lazy(() => import('./components/page404/Page404'));

const store = configureStore();

const App = () => (
  <Theme>
    <GlobalStyle />
    <Router>
      <Navigation />
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
    </Router>
  </Theme>
);

const ROOT = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  ROOT
);
