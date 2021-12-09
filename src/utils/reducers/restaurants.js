import { restaurantsConstants as rest } from '../constants';

const initialState = {
  restaurants: [],
  prev: false,
  next: false,
  status: 'idle',
  error: null,
};

const restaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case rest.FETCH_RESTAURANTS_LOADING:
      return {
        ...state,
        status: 'loading',
        error: null,
      };
    case rest.FETCH_RESTAURANTS_SUCCESS:
      return {
        ...state,
        status: 'success',
        restaurants: action.restaurants,
        error: null,
      };
    case rest.FETCH_RESTAURANTS_REJECTED:
      return {
        ...state,
        status: 'error',
        error: action.error,
      };
    default:
      return state;
  }
};

export default restaurantsReducer;
