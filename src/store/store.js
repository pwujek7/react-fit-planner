import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';

import daysReducer from '../reducers/daysReducer';
import authReducer from '../reducers/authReducer';

import { verifyAuth } from '../actions/authActions';

const rootReducer = combineReducers({
  days: daysReducer,
  auth: authReducer
});

export default function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  store.dispatch(verifyAuth());
  return store;
}
