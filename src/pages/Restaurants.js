import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchShifts } from '../utils/actions/shifts.actions';
import { fetchCategories } from '../utils/actions/categories.actions';
import Layout from '../components/Layout/Layout';
import { useAuth } from '../utils/customHooks';

const Restaurants = () => {
  useAuth('/', ['', 'admin']);
  const { shifts } = useSelector((state) => state.shifts);
  const { categories } = useSelector((state) => state.categories);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.currentUser);

  useEffect(() => {
    if (shifts.length === 0) {
      dispatch(fetchShifts(user));
    }
    if (categories.length === 0) {
      dispatch(fetchCategories(user));
    }
  }, [shifts, categories, user]);

  return (
    <Layout>
      Hello world
    </Layout>
  );
};

export default Restaurants;
