import { currentUserConstants as cu } from '../constants';
import { createApi } from '../helpers';

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

export const loginInUser = (email, password) => async (dispatch) => {
  dispatch(fetchUserLoading());
  try {
    const { data } = await api.post('v1/authenticate', {
      email,
      password,
    });
    const user = formatUser(data);
    console.log(data);
  } catch (err) {
    dispatch(fetchUserRejected(err));
  }
};

export const registerUser = (email, password) => async (dispatch) => {
  dispatch(fetchUserLoading());
  try {
    const { data } = api.post('v1/authenticate', {
      email,
      password,
    });
  } catch (err) {
    dispatch(fetchUserRejected(err));
  }
};
