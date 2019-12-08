import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { ROUTES } from './constants/routes';

import Navigation from './components/navigation/Navigation';
import Page404 from './components/page404/Page404';

const App = () => (
  <Router>
    <Navigation />
    <Switch>
      {
        ROUTES.map(route => (
          <Route key={route.path} exact={route.exact} path={route.path}>
            {route.component}
          </Route>
        ))
      }
      <Route>
        <Page404 />
      </Route>
    </Switch>
  </Router>
);

const ROOT = document.getElementById('root');

ReactDOM.render(<App />, ROOT);
