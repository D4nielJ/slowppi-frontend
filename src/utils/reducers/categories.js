import { categoriesConstants as cat } from '../constants';

const initialState = {
  categories: [],
  status: 'idle',
  error: null,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case cat.FETCH_CATEGORIES_LOADING:
      return {
        ...state,
        status: 'loading',
        error: null,
      };
    case cat.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        status: 'success',
        categories: action.categories,
        error: null,
      };
    case cat.FETCH_CATEGORIES_REJECTED:
      return {
        ...state,
        status: 'error',
        error: action.error,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
