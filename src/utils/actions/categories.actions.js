import { categoriesConstants as cat } from '../constants';
import { createApi } from '../helpers';

const fetchCategoriesLoading = () => ({
  type: cat.FETCH_CATEGORIES_LOADING,
});

const fetchCategoriesSuccess = (categories) => ({
  type: cat.FETCH_CATEGORIES_SUCCESS,
  categories,
});

export const fetchCategoriesRejected = (error) => ({
  type: cat.FETCH_CATEGORIES_REJECTED,
  error,
});

export const fetchCategories = (user) => async (dispatch) => {
  dispatch(fetchCategoriesLoading());
  const api = createApi(user.token);
  try {
    const { data } = await api.get('v1/categories');

    dispatch(fetchCategoriesSuccess(data));
  } catch (err) {
    dispatch(fetchCategoriesRejected(err));
  }
};
