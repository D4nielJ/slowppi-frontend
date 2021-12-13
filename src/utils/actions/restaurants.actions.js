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

export const fetchRestaurantsSuccess = (restaurants) => ({
  type: rc.FETCH_RESTAURANTS_SUCCESS,
  restaurants,
});

export const fetchSingleRestSuccess = (restaurant) => ({
  type: rc.FETCH_SINGLE_RESTAURANT_SUCCESS,
  restaurant,
});

export const fetchRestaurantsRejected = (error) => ({
  type: rc.FETCH_RESTAURANTS_REJECTED,
  error,
});

export const cleanRestaurants = () => ({
  type: rc.CLEAN_RESTAURANTS,
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

export const fetchSingleRestaurant = (user, id) => async (dispatch) => {
  dispatch(fetchRestaurantsLoading());
  const api = createApi(user.token);
  try {
    const {
      data: {
        data: {
          name,
          description,
          image,
          reservation_spots: reservationSpots,
          price_range: priceRange,
          shifts,
          categories,
        },
      },
    } = await api.get(`v1/restaurants/${id}`);

    dispatch(fetchSingleRestSuccess({
      id, name, description, image, reservationSpots, priceRange, shifts, categories,
    }));
  } catch (err) {
    dispatch(fetchRestaurantsRejected(err));
  }
};

export const fetchRestaurantsInitial = (user) => async (dispatch) => {
  dispatch(fetchRestaurantsLoading());
  const api = createApi(user.token);
  try {
    const { data, headers } = await api.get(`v1/restaurants?page=${1}`);
    let next;
    if (headers.link) {
      next = headers.link.includes('next');
    }
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
