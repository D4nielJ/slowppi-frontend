import { currentUserConstants as cu } from '../constants';
import { createApi, formatUser } from '../helpers';

const api = createApi();

const fetchUserLoading = () => ({
  type: cu.FETCH_USER_LOADING,
});

const fetchUserSuccess = (user) => ({
  type: cu.FETCH_USER_SUCCESS,
  user,
});

const fetchUserRejected = (error) => ({
  type: cu.FETCH_USER_REJECTED,
  error,
});

export const logoutUser = () => {
  localStorage.removeItem('user');
  return {
    type: cu.USER_LOGOUT,
  };
};

export const loginUser = (email, password) => async (dispatch) => {
  dispatch(fetchUserLoading());
  try {
    const { data } = await api.post('v1/authenticate', {
      email,
      password,
    });
    const user = formatUser(data);
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(fetchUserSuccess(user));
  } catch (err) {
    dispatch(fetchUserRejected(err));
  }
};

export const registerUser = (firstName, lastName, email, password) => async (dispatch) => {
  dispatch(fetchUserLoading());
  try {
    const { data } = await api.post('v1/register', {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      password_confirmation: password,
    });
    const user = formatUser(data);
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(fetchUserSuccess(user));
  } catch (err) {
    dispatch(fetchUserRejected(err));
  }
};
