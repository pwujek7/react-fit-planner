import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Navigation from './components/navigation/Navigation';
import Routes from './components/routes/Routes';
import Theme from './theme/Theme';
import GlobalStyle from './theme/globalStyles';

import configureStore from './store/store';

const store = configureStore();

const App = () => (
  <Theme>
    <GlobalStyle />
    <Router>
      <Navigation />
      <Routes />
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
