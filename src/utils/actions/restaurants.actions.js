import { restaurantsConstants as cat } from '../constants';
import { createApi } from '../helpers';

const fetchRestaurantsLoading = () => ({
  type: cat.FETCH_RESTAURANTS_LOADING,
});

const fetchRestaurantsSuccess = (restaurants) => ({
  type: cat.FETCH_RESTAURANTS_SUCCESS,
  restaurants,
});

export const fetchRestaurantsRejected = (error) => ({
  type: cat.FETCH_RESTAURANTS_REJECTED,
  error,
});

export const fetchRestaurants = (user) => async (dispatch) => {
  dispatch(fetchRestaurantsLoading());
  const api = createApi(user.token);
  try {
    const { data } = await api.get('v1/restaurants?page=2');

    dispatch(fetchRestaurantsSuccess(data));
  } catch (err) {
    dispatch(fetchRestaurantsRejected(err));
  }
};
