import produce from 'immer';
import {
  ADD_DAY_SUCCESS,
  ADD_DAY_ERROR,
  EDIT_DAY,
  DELETE_DAY
} from '../actions/daysActions';

const initialState = {
  data: [],
  postDataError: false,
  postDataErrorMessage: ''
};

const daysReducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ADD_DAY_SUCCESS: {
        const day = action.payload;
        draft.data.push(day);
        draft.postDataError = false;
        draft.postDataErrorMessage = '';
        return;
      }
      case ADD_DAY_ERROR: {
        draft.postDataError = true;
        draft.postDataErrorMessage = action.payload.message;
        return;
      }
      case EDIT_DAY: {
        return;
      }
      case DELETE_DAY: {
        return;
      }
      default: {
        return draft;
      }
    }
  });
};

export default daysReducer;
