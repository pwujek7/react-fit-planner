import { auth } from '../config/firebase';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export const VERIFY_REQUEST = 'VERIFY_REQUEST';
export const VERIFY_SUCCESS = 'VERIFY_SUCCESS';

const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS
  };
};

const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
    payload: error
  };
};

const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

const logoutError = (error) => {
  return {
    type: LOGOUT_ERROR,
    payload: error
  };
};

const signupSuccess = () => {
  return {
    type: SIGNUP_SUCCESS
  };
};

const signupError = (error) => {
  return {
    type: SIGNUP_ERROR,
    payload: error
  };
};

const verifyRequest = () => {
  return {
    type: VERIFY_REQUEST
  };
};

const verifySuccess = (user) => {
  return {
    type: VERIFY_SUCCESS,
    payload: user
  };
};

export const signIn = (credentials) => {
  return (dispatch, getState) => {
    const { email, password } = credentials;

    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch(loginSuccess());
      })
      .catch((error) => {
        dispatch(loginError(error));
      });
  };
};

export const signOut = () => {
  return (dispatch, getState) => {

    auth.signOut()
      .then(() => {
        dispatch(logoutSuccess());
      })
      .catch((error) => {
        dispatch(logoutError(error));
      });
  };
};

export const verifyAuth = () => {
  return (dispatch, getState) => {
    dispatch(verifyRequest());

    auth.onAuthStateChanged((user) => {
      if (user !== null) {
        dispatch(verifySuccess(user));
      }
    });
  };
};
