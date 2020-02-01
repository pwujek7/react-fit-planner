import produce from 'immer';
import {
  ADD_DAY,
  EDIT_DAY,
  DELETE_DAY
} from '../actions/daysActions';

const initialState = {
  data: []
};

const daysReducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ADD_DAY: {
        return;
      }
      case EDIT_DAY: {
        return;
      }
      case DELETE_DAY: {
        return;
      }
      default: {
        return;
      }
    }
  });
};

export default daysReducer;
