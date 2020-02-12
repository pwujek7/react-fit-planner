import { db } from '../config/firebase';

export const ADD_DAY_SUCCESS = 'ADD_DAY_SUCCESS';
export const ADD_DAY_ERROR = 'ADD_DAY_ERROR';
export const EDIT_DAY = 'EDIT_DAY';
export const DELETE_DAY_SUCCESS = 'DELETE_DAY_SUCCESS';
export const DELETE_DAY_ERROR = 'DELETE_DAY_ERROR';
export const FETCH_ALL_DAYS_START = 'FETCH_ALL_DAYS_START';
export const FETCH_ALL_DAYS_SUCCESS = 'FETCH_ALL_DAYS_SUCCESS';
export const FETCH_ALL_DAYS_ERROR = 'FETCH_ALL_DAYS_ERROR';

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

export const deleteDaySuccess = (id) => {
  return {
    type: DELETE_DAY_SUCCESS,
    payload: id
  };
};

export const deleteDayError = (error) => {
  return {
    type: DELETE_DAY_ERROR,
    payload: error
  };
};

export const fetchAllDaysStart = (bool) => {
  return {
    type: FETCH_ALL_DAYS_START,
    payload: bool
  };
};

export const fetchAllDaysSuccess = (data) => {
  return {
    type: FETCH_ALL_DAYS_SUCCESS,
    payload: data
  };
};

export const fetchAllDaysError = (error) => {
  return {
    type: FETCH_ALL_DAYS_ERROR,
    payload: error
  };
};

export const createDay = (day) => (dispatch, getState) => {
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

export const removeDay = (id) => (dispatch, getState) => {
  db.collection('days').doc(id).delete()
    .then(() => {
      dispatch(deleteDaySuccess(id));
    })
    .catch((error) => {
      dispatch(deleteDayError(error));
    });
};

export const fetchAllDays = () => (dispatch, getState) => {
  const { auth: { user: { uid } } } = getState();

  if (uid) {
    dispatch(fetchAllDaysStart(true));

    db.collection('days').where('userId', '==', uid)
      .get()
      .then((querySnapshot) => {
        const fetchedDays = [];

        querySnapshot.forEach((doc) => {
          fetchedDays.push({
            id: doc.id,
            ...doc.data()
          });
        });

        dispatch(fetchAllDaysSuccess(fetchedDays));
      })
      .catch((error) => {
        dispatch(fetchAllDaysError(error));
      });
  }
};
