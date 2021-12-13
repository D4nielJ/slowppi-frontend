import { restaurantsConstants as rc } from '../constants';
import { createApi } from '../helpers';

const fetchRestaurantsLoading = () => ({
  type: rc.FETCH_RESTAURANTS_LOADING,
});

const fetchRestaurantsSuccess = (restaurants) => ({
  type: rc.FETCH_RESTAURANTS_SUCCESS,
  restaurants,
});

export const fetchRestaurantsRejected = (error) => ({
  type: rc.FETCH_RESTAURANTS_REJECTED,
  error,
});

export const cleanRestaurants = () => ({
  type: rc.SET_PAGE_INCREMENT,
});

export const incrementPage = () => ({
  type: rc.SET_PAGE_INCREMENT,
});

export const decrementPage = () => ({
  type: rc.SET_PAGE_DECREMENT,
});

const fetchRestaurantsDeleteLoading = () => ({
  type: rc.FETCH_RESTAURANTS_DELETE_LOADING,
});

const fetchRestaurantsDeleteSuccess = (restaurantslist) => ({
  type: rc.FETCH_RESTAURANTS_DELETE_SUCCESS,
  restaurantslist,
});

export const fetchRestaurantsDeleteRejected = (error) => ({
  type: rc.FETCH_RESTAURANTS_DELETE_REJECTED,
  error,
});

const deleteRestaurantLoading = () => ({
  type: rc.DELETE_RESTAURANT_LOADING,
});

const deleteRestaurantSuccess = (restaurantslist, restaurants) => ({
  type: rc.DELETE_RESTAURANT_SUCCESS,
  restaurantslist,
  restaurants,
});

export const deleteRestaurantRejected = (error) => ({
  type: rc.DELETE_RESTAURANT_REJECTED,
  error,
});

export const fetchRestaurantsInitial = (user) => async (dispatch) => {
  dispatch(fetchRestaurantsLoading());
  const api = createApi(user.token);
  try {
    const { data, headers } = await api.get(`v1/restaurants?page=${1}`);
    const next = headers.link.includes('next');
    await dispatch(fetchRestaurantsSuccess(data));
    if (next) {
      const { data } = await api.get(`v1/restaurants?page=${2}`);
      dispatch(fetchRestaurantsSuccess(data));
    }
  } catch (err) {
    dispatch(fetchRestaurantsRejected(err));
  }
};

export const fetchRestaurants = (user, page) => async (dispatch) => {
  dispatch(fetchRestaurantsLoading());
  const api = createApi(user.token);
  try {
    const { headers } = await api.get(`v1/restaurants?page=${page}`);
    let data = [];
    const next = headers.link.includes('next');
    if (next) {
      const response = await api.get(`v1/restaurants?page=${page + 1}`);
      data = response.data;
    }
    dispatch(fetchRestaurantsSuccess(data));
  } catch (err) {
    dispatch(fetchRestaurantsRejected(err));
  }
};

export const fetchRestaurantsDelete = (user) => async (dispatch) => {
  dispatch(fetchRestaurantsDeleteLoading());
  const api = createApi(user.token);
  try {
    const { data } = await api.get('v1/eliminate');

    dispatch(fetchRestaurantsDeleteSuccess(data));
  } catch (err) {
    dispatch(fetchRestaurantsDeleteRejected(err));
  }
};

export const deleteRestaurant = (user, id) => async (dispatch) => {
  dispatch(deleteRestaurantLoading());
  const api = createApi(user.token);
  try {
    await api.delete(`v1/restaurants/${id}`);
    const { data } = await api.get('v1/eliminate');
    const response = await api.get('v1/restaurants?page=1&per_page=6');

    dispatch(deleteRestaurantSuccess(data, response.data));
  } catch (err) {
    dispatch(deleteRestaurantRejected(err));
  }
};
