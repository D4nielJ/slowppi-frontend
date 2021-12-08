import { shiftsConstants as sc } from '../constants';

const initialState = {
  shifts: [],
  status: 'idle',
  error: null,
};

const shiftsReducer = (state = initialState, action) => {
  switch (action.type) {
    case sc.FETCH_SHIFT_LOADING:
      return {
        ...state,
        status: 'loading',
        error: null,
      };
    case sc.FETCH_SHIFT_SUCCESS:
      return {
        ...state,
        status: 'success',
        shifts: action.shifts,
        error: null,
      };
    case sc.FETCH_SHIFT_REJECTED:
      return {
        ...state,
        status: 'error',
        error: action.error,
      };
    default:
      return state;
  }
};

export default shiftsReducer;
