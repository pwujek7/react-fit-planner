import React from 'react';
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
import Login from './components/login/Login';
import Page404 from './components/page404/Page404';
import PrivateRoute from './components/navigation/PrivateRoute';
import Register from './components/register/Register';

const store = configureStore();

const App = () => (
  <Router>
    <Navigation />
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
  </Router>
);

const ROOT = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  ROOT
);
