import { auth, db } from '../config/firebase';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export const VERIFY_REQUEST = 'VERIFY_REQUEST';
export const VERIFY_SUCCESS = 'VERIFY_SUCCESS';

export const UPDATE_EMAIL_SUCCESS = 'UPDATE_EMAIL_SUCCESS';
export const UPDATE_EMAIL_ERROR = 'UPDATE_EMAIL_ERROR';

export const UPDATE_PASSWORD_SUCCESS = 'UPDATE_PASSWORD_SUCCESS';
export const UPDATE_PASSWORD_ERROR = 'UPDATE_PASSWORD_ERROR';

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

const updateEmailSuccess = (email) => {
  return {
    type: UPDATE_EMAIL_SUCCESS,
    payload: email
  };
};

const updateEmailError = (error) => {
  return {
    type: UPDATE_EMAIL_ERROR,
    payload: error
  };
};

const updatePasswordSuccess = () => {
  return {
    type: UPDATE_PASSWORD_SUCCESS,
  };
};

const updatePasswordError = (error) => {
  return {
    type: UPDATE_PASSWORD_ERROR,
    payload: error
  };
};

export const signIn = (credentials) => {
  return (dispatch) => {
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
  return (dispatch) => {

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
  return (dispatch) => {
    dispatch(verifyRequest());

    auth.onAuthStateChanged((user) => {
      if (user !== null) {
        dispatch(verifySuccess(user));
      }
    });
  };
};

export const signUp = (credentials) => {
  return (dispatch) => {
    auth.createUserWithEmailAndPassword(
      credentials.email,
      credentials.password
    )
      .then((response) => {
        return db.collection('users').doc(response.user.uid).set({
          username: credentials.username
        });
      })
      .then(() => {
        dispatch(signupSuccess());
      })
      .catch((error) => {
        dispatch(signupError(error));
      });
  };
};

export const updateEmail = (email) => {
  return (dispatch) => {
    const user = auth.currentUser;
    user.updateEmail(email)
      .then(() => {
        dispatch(updateEmailSuccess(email));
      })
      .catch((error) => {
        dispatch(updateEmailError(error));
      });
  };
};

export const updatePassword = (password) => {
  return (dispatch) => {
    const user = auth.currentUser;
    user.updatePassword(password)
      .then(() => {
        dispatch(updatePasswordSuccess());
      })
      .catch((error) => {
        dispatch(updatePasswordError(error));
      });
  };
};
