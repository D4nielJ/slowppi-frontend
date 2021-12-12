const restautantsConstants = {
  FETCH_RESTAURANTS_LOADING: 'restautants/fetchRestautants/loading',
  FETCH_RESTAURANTS_SUCCESS: 'restautants/fetchRestautants/success',
  FETCH_RESTAURANTS_REJECTED: 'restautants/fetchRestautants/rejected',

  SET_PAGE_INCREMENT: 'restautants/setPage/increment',
  SET_PAGE_DECREMENT: 'restautants/setPage/decrement',

  CLEAN_RESTAURANTS: 'restautants/cleanRestaurants/success',

  // CREATE_RESTAURANTS_LOADING: 'restautants/createRestautants/loading',
  // CREATE_RESTAURANTS_SUCCESS: 'restautants/createRestautants/success',
  // CREATE_RESTAURANTS_REJECTED: 'restautants/createRestautants/rejected',

  DELETE_RESTAURANT_LOADING: 'restautants/deleteRestautant/loading',
  DELETE_RESTAURANT_SUCCESS: 'restautants/deleteRestautant/success',
  DELETE_RESTAURANT_REJECTED: 'restautants/deleteRestautant/rejected',

  FETCH_RESTAURANTS_DELETE_LOADING: 'restautants/fetchRestautantsDelete/loading',
  FETCH_RESTAURANTS_DELETE_SUCCESS: 'restautants/fetchRestautantsDelete/success',
  FETCH_RESTAURANTS_DELETE_REJECTED: 'restautants/fetchRestautantsDelete/rejected',
};

export default restautantsConstants;
