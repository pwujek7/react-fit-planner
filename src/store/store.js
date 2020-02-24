import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';

import daysReducer from '../reducers/daysReducer';
import authReducer from '../reducers/authReducer';

import { LOGOUT_SUCCESS, verifyAuth } from '../actions/authActions';

const appReducer = combineReducers({
  days: daysReducer,
  auth: authReducer
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT_SUCCESS) {
    state = undefined;
  }

  return appReducer(state, action);
};

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
