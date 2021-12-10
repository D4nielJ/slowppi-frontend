import { restaurantsConstants as rc } from '../constants';

const initialState = {
  selectedRestaurant: null,
  restaurants: [],
  page: 1,
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
    case rc.FETCH_RESTAURANTS_SUCCESS:
      return {
        ...state,
        status: 'success',
        restaurants: [...state.restaurants, ...action.restaurants],
        error: null,
      };
    case rc.FETCH_SINGLE_RESTAURANT_SUCCESS:
      return {
        ...state,
        status: 'success',
        selectedRestaurant: action.type,
        error: null,
      };
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
    case rc.SET_PAGE_INCREMENT:
      return {
        ...state,
        page: state.page + 1,
      };
    case rc.SET_PAGE_DECREMENT:
      return {
        ...state,
        page: state.page - 1,
      };
    default:
      return state;
  }
};

export default restaurantsReducer;
