import produce from 'immer';
import {
  ADD_DAY_SUCCESS,
  ADD_DAY_ERROR,
  EDIT_DAY_SUCCESS,
  EDIT_DAY_ERROR,
  DELETE_DAY_SUCCESS,
  DELETE_DAY_ERROR,
  FETCH_ALL_DAYS_START,
  FETCH_ALL_DAYS_SUCCESS,
  FETCH_ALL_DAYS_ERROR
} from '../actions/daysActions';

const initialState = {
  postDayError: false,
  postDayErrorMessage: '',
  editDayError: false,
  editDayErrorMessage: '',
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
      case EDIT_DAY_SUCCESS: {
        const index = draft.data.findIndex(d => d.id === action.payload.id);
        draft.data[index] = action.payload.day;
        draft.editDayError = false;
        draft.editDayErrorMessage = '';
        return;
      }
      case EDIT_DAY_ERROR: {
        draft.editDayError = true;
        draft.editDayErrorMessage = action.payload.message;
        return;
      }
      case DELETE_DAY_SUCCESS: {
        const index = draft.data.findIndex(day => day.id === action.payload);
        draft.data.splice(index, 1);
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
