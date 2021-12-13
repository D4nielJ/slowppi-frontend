import { restaurantsConstants as rc } from '../constants';
import { createApi } from '../helpers';

export const createRestaurantSuccess = (restaurant) => ({
  type: rc.CREATE_RESTAURANT_SUCCESS,
  restaurant,
});

export const createRestaurantRejected = (restaurant) => ({
  type: rc.CREATE_RESTAURANT_REJECTED,
  restaurant,
});

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

export const createRestaurant = (
  user,
  name,
  image,
  description,
  reservationSpots,
  priceRange,
  checkedCategories,
  checkedShifts,
) => async (dispatch) => {
  dispatch(fetchRestaurantsLoading());
  const api = createApi(user.token);
  try {
    const { data } = await api.post('v1/restaurants', {
      name,
      image,
      description,
      reservation_spots: reservationSpots,
      price_range: priceRange,
      categories: checkedCategories,
      shifts: checkedShifts,
    });
    dispatch(createRestaurantSuccess(data));
  } catch (error) {
    dispatch(createRestaurantRejected(error));
  }
};
