import { shiftsConstants as sc } from '../constants';
import { createApi } from '../helpers';

const fetchShiftsLoading = () => ({
  type: sc.FETCH_SHIFT_LOADING,
});

const fetchShiftsSuccess = (shifts) => ({
  type: sc.FETCH_SHIFT_SUCCESS,
  shifts,
});
export const fetchShiftsRejected = (error) => ({
  type: sc.FETCH_SHIFT_REJECTED,
  error,
});

export const fetchShifts = (user) => async (dispatch) => {
  dispatch(fetchShiftsLoading());
  const api = createApi(user.token);
  try {
    const { data } = await api.get('v1/shifts');

    dispatch(fetchShiftsSuccess(data));
  } catch (err) {
    dispatch(fetchShiftsRejected(err));
  }
};
