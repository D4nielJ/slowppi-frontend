import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { fetchShifts } from '../utils/actions/shifts.actions';
import { fetchCategories } from '../utils/actions/categories.actions';
import { fetchRestaurants } from '../utils/actions/restaurants.actions';
import Layout from '../components/Layout/Layout';
import { useAuth } from '../utils/customHooks';

const Restaurants = () => {
  useAuth('/', ['', 'admin']);
  const dispatch = useDispatch();
  const { shifts } = useSelector((state) => state.shifts);
  const { categories } = useSelector((state) => state.categories);
  const { restaurants } = useSelector((state) => state.restaurants);
  const { user } = useSelector((state) => state.currentUser);

  useEffect(() => {
    if (shifts.length === 0) {
      dispatch(fetchShifts(user));
    }
    if (categories.length === 0) {
      dispatch(fetchCategories(user));
    }
    if (restaurants.length === 0) {
      dispatch(fetchRestaurants(user, 1));
    }
  }, [shifts, categories, restaurants, user]);

  return (
    <Layout>
      
    </Layout>
  );
};

export default Restaurants;
