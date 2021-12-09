import { restaurantsConstants as rc } from '../constants';

const initialState = {
  restaurants: [],
  prev: null,
  next: null,
  status: 'idle',
  error: null,
};

const restaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case rc.FETCH_RESTAURANTS_LOADING:
      return {
        ...state,
        status: 'loading',
        error: null,
      };
    case rc.FETCH_RESTAURANTS_SUCCESS: {
      const { restaurants, prev, next } = action;
      return {
        ...state,
        status: 'success',
        restaurants: [...state.restaurants, ...restaurants],
        prev,
        next,
        error: null,
      };
    }
    case rc.FETCH_RESTAURANTS_REJECTED:
      return {
        ...state,
        status: 'error',
        error: action.error,
      };
    case rc.CLEAN_RESTAURANTS:
      return {
        restaurants: [],
        prev: null,
        next: null,
        status: 'idle',
        error: null,
      };
    default:
      return state;
  }
};

export default restaurantsReducer;
