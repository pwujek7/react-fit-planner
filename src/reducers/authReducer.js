import produce from 'immer';
import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  VERIFY_REQUEST,
  VERIFY_SUCCESS
} from '../actions/authActions';

const initialState = {
  isVerifying: false,
  loginError: false,
  loginErrorMessage: '',
  logoutError: false,
  logoutErrorMessage: '',
  signupError: false,
  signupErrorMessage: '',
  isAuthenticated: false,
  user: {}
};

const authReducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case LOGIN_SUCCESS: {
        draft.loginError = false;
        draft.loginErrorMessage = '';
        draft.isAuthenticated = true;
        return;
      }
      case LOGIN_ERROR: {
        draft.isAuthenticated = false;
        draft.loginError = true;
        draft.loginErrorMessage = action.payload.message;
        return;
      }
      case LOGOUT_SUCCESS: {
        draft.logoutError = false;
        draft.logoutErrorMessage = '';
        draft.isAuthenticated = false;
        draft.user = {};
        return;
      }
      case LOGOUT_ERROR: {
        draft.logoutError = true;
        draft.logoutErrorMessage = action.payload.message;
        draft.isAuthenticated = false;
        return;
      }
      case VERIFY_REQUEST: {
        draft.isVerifying = true;
        return;
      }
      case VERIFY_SUCCESS: {
        draft.isVerifying = false;
        draft.isAuthenticated = true;
        draft.user = action.payload;
        return;
      }
      default:
        return draft;
    }
  });
};

export default authReducer;
