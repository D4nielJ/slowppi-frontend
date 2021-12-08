import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchShifts } from '../utils/actions/shifts.actions';
import Layout from '../components/Layout/Layout';
import { useAuth } from '../utils/customHooks';

const Restaurants = () => {
  useAuth('/', ['', 'admin']);
  const { shifts } = useSelector((state) => state.shifts);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.currentUser);

  useEffect(() => {
    if (shifts.length === 0) {
      dispatch(fetchShifts(user));
    }
  }, [shifts, user]);

  return (
    <Layout>
      Hello world
    </Layout>
  );
};

export default Restaurants;
