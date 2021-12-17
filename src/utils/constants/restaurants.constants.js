const restautantsConstants = {
  FETCH_RESTAURANTS_LOADING: 'restaurants/fetchRestaurants/loading',
  FETCH_RESTAURANTS_SUCCESS: 'restaurants/fetchRestaurants/success',
  FETCH_RESTAURANTS_REJECTED: 'restaurants/fetchRestaurants/rejected',

  FETCH_SINGLE_RESTAURANT_SUCCESS: 'restaurants/fetchSingleRestaurant/success',

  SET_PAGE_INCREMENT: 'restaurants/setPage/increment',
  SET_PAGE_DECREMENT: 'restaurants/setPage/decrement',

  CLEAN_RESTAURANTS: 'restaurants/cleanRestaurants',
  CLEAN_STATUS: 'restaurants/cleanStatus',

  DELETE_RESTAURANT_LOADING: 'restautants/deleteRestautant/loading',
  DELETE_RESTAURANT_SUCCESS: 'restautants/deleteRestautant/success',
  DELETE_RESTAURANT_REJECTED: 'restautants/deleteRestautant/rejected',

  FETCH_RESTAURANTS_DELETE_LOADING: 'restautants/fetchRestautantsDelete/loading',
  FETCH_RESTAURANTS_DELETE_SUCCESS: 'restautants/fetchRestautantsDelete/success',
  FETCH_RESTAURANTS_DELETE_REJECTED: 'restautants/fetchRestautantsDelete/rejected',

  CREATE_RESTAURANT_LOADING: 'restautants/createRestaurant/loading',
  CREATE_RESTAURANT_SUCCESS: 'restautants/createRestaurant/success',
  CREATE_RESTAURANT_REJECTED: 'restautants/createRestaurant/rejected',
};

export default restautantsConstants;
