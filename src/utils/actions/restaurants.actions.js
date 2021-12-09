import { restaurantsConstants as cat } from '../constants';
import { createApi } from '../helpers';

const fetchRestaurantsLoading = () => ({
  type: cat.FETCH_RESTAURANTS_LOADING,
});

const fetchRestaurantsSuccess = (restaurants, prev, next) => ({
  type: cat.FETCH_RESTAURANTS_SUCCESS,
  restaurants,
  prev,
  next,
});

export const fetchRestaurantsRejected = (error) => ({
  type: cat.FETCH_RESTAURANTS_REJECTED,
  error,
});

export const fetchRestaurants = (user, page) => async (dispatch) => {
  dispatch(fetchRestaurantsLoading());
  const api = createApi(user.token);
  try {
    const response = await api.get(`v1/restaurants?page=${page}`);
    console.log(response.headers.link);
    const prev = response.headers.link.includes('prev');
    console.log(prev);
    const next = response.headers.link.includes('next');
    console.log(next);

    dispatch(fetchRestaurantsSuccess(response.data), prev, next);
  } catch (err) {
    dispatch(fetchRestaurantsRejected(err));
  }
};
