import { db } from '../config/firebase';

export const ADD_DAY_SUCCESS = 'ADD_DAY_SUCCESS';
export const ADD_DAY_ERROR = 'ADD_DAY_ERROR';
export const EDIT_DAY = 'EDIT_DAY';
export const DELETE_DAY = 'DELETE_DAY';

export const addDaySuccess = (day) => {
  return {
    type: ADD_DAY_SUCCESS,
    payload: day
  };
};

export const addDayError = (error) => {
  return {
    type: ADD_DAY_ERROR,
    payload: error
  };
};

export const editDay = (day) => {
  return {
    type: EDIT_DAY,
    payload: day
  };
};

export const deleteDay = (id) => {
  return {
    type: DELETE_DAY,
    payload: id
  };
};

export const createDay = (day) => {
  return (dispatch, getState) => {
    const { auth: { user: { uid } } } = getState();

    db.collection('days').add({
      ...day,
      userId: uid
    })
      .then(() => {
        dispatch(addDaySuccess(day));
      })
      .catch((error) => {
        dispatch(addDayError(error));
      });
  };
};
