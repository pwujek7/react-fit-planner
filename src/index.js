import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from './store/store';
import { verifyAuth } from './actions/authActions';

import { ROUTES } from './constants/routes';

import Navigation from './components/navigation/Navigation';
import Page404 from './components/page404/Page404';

const store = configureStore();

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

// class App extends React.Component {
//   componentDidMount = () => {
//     store.dispatch(verifyAuth());
//   }

//   render() {
//     return (
//       <Router>
//         <Navigation />
//         <Switch>
//           {
//             ROUTES.map(route => (
//               <Route key={route.path} exact={route.exact} path={route.path}>
//                 {route.component}
//               </Route>
//             ))
//           }
//           <Route>
//             <Page404 />
//           </Route>
//         </Switch>
//       </Router>
//     )
//   }
// }

const ROOT = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  ROOT
);
