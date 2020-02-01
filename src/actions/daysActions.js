export const ADD_DAY = 'ADD_DAY';
export const EDIT_DAY = 'EDIT_DAY';
export const DELETE_DAY = 'DELETE_DAY';

export const addDay = (day) => {
  return {
    type: ADD_DAY,
    payload: day
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
