import { restaurantsConstants as rc } from '../constants';

const initialState = {
  selectedRestaurant: null,
  restaurants: [],
  restaurantslist: [],
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
        selectedRestaurant: action.restaurant,
        error: null,
      };
    case rc.FETCH_RESTAURANTS_REJECTED:
      return {
        ...state,
        status: 'error',
        error: action.error,
      };
    case rc.CLEAN_RESTAURANTS: // Update and implement
      return {
        selectedRestaurant: null,
        restaurants: [],
        restaurantslist: [],
        page: 1,
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
    case rc.FETCH_RESTAURANTS_DELETE_LOADING:
      return {
        ...state,
        status: 'loading',
        error: null,
      };
    case rc.FETCH_RESTAURANTS_DELETE_SUCCESS:
      return {
        ...state,
        status: 'success',
        restaurantslist: action.restaurantslist,
        error: null,
      };
    case rc.FETCH_RESTAURANTS_DELETE_REJECTED:
      return {
        ...state,
        status: 'error',
        error: action.error,
      };
    case rc.DELETE_RESTAURANT_LOADING:
      return {
        ...state,
        status: 'loading',
        error: null,
      };
    case rc.DELETE_RESTAURANT_SUCCESS:
      return {
        ...state,
        restaurants: action.restaurants,
        restaurantslist: action.restaurantslist,
        page: 1,
        status: 'success',
        error: null,
      };
    case rc.DELETE_RESTAURANT_REJECTED:
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
