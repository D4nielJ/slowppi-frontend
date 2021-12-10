import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchShifts } from '../utils/actions/shifts.actions';
import { fetchCategories } from '../utils/actions/categories.actions';
import Layout from '../components/Layout/Layout';
import { useAuth } from '../utils/customHooks';

const CreateRestaurant = () => {
  useAuth('/restaurants', ['admin']);

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.currentUser);
  const { shifts } = useSelector((state) => state.shifts);
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    if (user) {
      if (shifts.length === 0) {
        dispatch(fetchShifts(user));
      }
      if (categories.length === 0) {
        dispatch(fetchCategories(user));
      }
    }
    console.log(shifts, categories);
  }, [shifts, categories]);

  return (
    <Layout>
      <div>Hello world</div>
    </Layout>
  );
};

export default CreateRestaurant;
