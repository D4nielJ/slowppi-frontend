import { currentUserConstants as cu } from '../constants';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = user ? {
  user,
  status: 'success',
  error: null,
} : {
  user: null,
  status: 'idle',
  error: null,
};

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case cu.FETCH_USER_LOADING:
      return {
        ...state,
        status: 'loading',
        error: null,
      };
    case cu.FETCH_USER_SUCCESS:
      return {
        ...state,
        status: 'success',
        user: action.user,
        error: null,
      };
    case cu.FETCH_USER_REJECTED:
      return {
        ...state,
        status: 'error',
        error: action.error,
      };
    case cu.USER_LOGOUT:
      return {
        ...state,
        status: 'idle',
        user: null,
      };
    default:
      return state;
  }
};

export default currentUserReducer;
