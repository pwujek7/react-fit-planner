import React from 'react';
import ReactDOM from 'react-dom';

import Test from './components/test/Test';

const App = () => (
  <Test />
);

const ROOT = document.getElementById('root');

ReactDOM.render(<App />, ROOT);
