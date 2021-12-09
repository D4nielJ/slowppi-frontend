import { restaurantsConstants as rc } from '../constants';
import { createApi } from '../helpers';

const fetchRestaurantsLoading = () => ({
  type: rc.FETCH_RESTAURANTS_LOADING,
});

const fetchRestaurantsSuccess = (restaurants, prev, next) => ({
  type: rc.FETCH_RESTAURANTS_SUCCESS,
  restaurants,
  prev,
  next,
});

export const fetchRestaurantsRejected = (error) => ({
  type: rc.FETCH_RESTAURANTS_REJECTED,
  error,
});

export const cleanRestaurants = () => ({
  type: rc.CLEAN_RESTAURANTS,
});


export const fetchRestaurantsInitial = (user) => async (dispatch) => {
  dispatch(fetchRestaurantsLoading());
  const api = createApi(user.token);
  try {
    const { data, headers } = await api.get(`v1/restaurants?page=${1}`);
    const next = headers.link.includes('next');
    await dispatch(fetchRestaurantsSuccess(data, false, next));
    if (next) {
      const { data } = await api.get(`v1/restaurants?page=${2}`);
      dispatch(fetchRestaurantsSuccess(data, false, next));
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
    const prev = headers.link.includes('prev');
    if (next) {
      const response = await api.get(`v1/restaurants?page=${page + 1}`);
      data = response.data;
    }
    dispatch(fetchRestaurantsSuccess(data, prev, next));
  } catch (err) {
    dispatch(fetchRestaurantsRejected(err));
  }
};
