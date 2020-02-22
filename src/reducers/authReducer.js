import produce from 'immer';
import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  UPDATE_EMAIL_SUCCESS,
  UPDATE_EMAIL_ERROR
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
  updateEmailError: false,
  updateEmailErrorMessage: '',
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
      case SIGNUP_SUCCESS: {
        draft.signupError = false;
        draft.signupErrorMessage = '';
        draft.isAuthenticated = true;
        return;
      }
      case SIGNUP_ERROR: {
        draft.signupError = true;
        draft.signupErrorMessage = action.payload.message;
        draft.isAuthenticated = false;
        return;
      }
      case UPDATE_EMAIL_SUCCESS: {
        draft.updateEmailError = false;
        draft.updateEmailErrorMessage = '';
        draft.user = { ...draft.user, email: action.payload };
        return;
      }
      case UPDATE_EMAIL_ERROR: {
        draft.updateEmailError = true;
        draft.updateEmailErrorMessage = action.payload.message;
        return;
      }
      default:
        return draft;
    }
  });
};

export default authReducer;
