import produce from 'immer';
import {
  ADD_DAY_SUCCESS,
  ADD_DAY_ERROR,
  EDIT_DAY,
  DELETE_DAY_SUCCESS,
  DELETE_DAY_ERROR,
  FETCH_ALL_DAYS_START,
  FETCH_ALL_DAYS_SUCCESS,
  FETCH_ALL_DAYS_ERROR
} from '../actions/daysActions';

const initialState = {
  postDayError: false,
  postDayErrorMessage: '',
  deleteDayError: false,
  deleteDayErrorMessage: '',
  fetchAllDaysLoading: false,
  fetchAllDaysError: false,
  fetchAllDaysErrorMessage: '',
  data: []
};

const daysReducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ADD_DAY_SUCCESS: {
        const day = action.payload;
        draft.data.push(day);
        draft.postDayError = false;
        draft.postDayErrorMessage = '';
        return;
      }
      case ADD_DAY_ERROR: {
        draft.postDayError = true;
        draft.postDayErrorMessage = action.payload.message;
        return;
      }
      case EDIT_DAY: {
        return;
      }
      case DELETE_DAY_SUCCESS: {
        draft.data.splice(draft.data.findIndex(day => day.id === action.payload), 1);
        draft.deleteDayError = false;
        draft.deleteDayErrorMessage = '';
        return;
      }
      case DELETE_DAY_ERROR: {
        draft.deleteDayError = true;
        draft.deleteDayErrorMessage = action.payload.message;
        return;
      }
      case FETCH_ALL_DAYS_START: {
        draft.fetchAllDaysLoading = action.payload;
        return;
      }
      case FETCH_ALL_DAYS_SUCCESS: {
        draft.fetchAllDaysLoading = false;
        draft.fetchAllDaysError = false;
        draft.fetchAllDaysErrorMessage = '';
        draft.data = action.payload;
        return;
      }
      case FETCH_ALL_DAYS_ERROR: {
        draft.fetchAllDaysLoading = false;
        draft.fetchAllDaysError = true;
        draft.fetchAllDaysErrorMessage = action.payload.message;
        return;
      }
      default: {
        return draft;
      }
    }
  });
};

export default daysReducer;
