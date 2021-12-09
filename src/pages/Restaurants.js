import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchShifts } from '../utils/actions/shifts.actions';
import { fetchCategories } from '../utils/actions/categories.actions';
import {
  decrementPage, fetchRestaurants, fetchRestaurantsInitial, incrementPage,
} from '../utils/actions/restaurants.actions';
import Layout from '../components/Layout/Layout';
import { useAuth } from '../utils/customHooks';
import { Button } from '../components/shared';
import Carousel from '../components/Restaurants/Carousel';

const Restaurants = () => {
  useAuth('/', ['', 'admin']);
  const dispatch = useDispatch();
  const { shifts } = useSelector((state) => state.shifts);
  const { categories } = useSelector((state) => state.categories);
  const { restaurants, page, status } = useSelector((state) => state.restaurants);
  const { user } = useSelector((state) => state.currentUser);
  const [sortedRests, setSortedRests] = useState([]);

  const sortRests = (page) => {
    const range = (page * 3);
    setSortedRests(restaurants.slice(range - 3, range));
  };

  useEffect(() => {
    if (user) {
      if (shifts.length === 0) {
        dispatch(fetchShifts(user));
      }
      if (categories.length === 0) {
        dispatch(fetchCategories(user));
      }
      if (status === 'idle' && restaurants.length === 0) {
        dispatch(fetchRestaurantsInitial(user));
      }
    }
    sortRests(page);
  }, [shifts, categories, restaurants, user, page]);

  const handleNextPage = () => {
    if (Math.ceil(restaurants.length / 3) < page + 2) {
      dispatch(fetchRestaurants(user, page + 1));
    }

    dispatch(incrementPage());
  };

  const handlePrevPage = () => {
    dispatch(decrementPage());
  };

  return (
    <Layout>
      <div>Hello World</div>
      <Button type="button" onClick={handlePrevPage} disabled={page === 1}>Prev</Button>
      <Carousel rests={sortedRests} />
      <Button type="button" onClick={handleNextPage} disabled={Math.ceil(restaurants.length / 3) < page + 1}>Next</Button>
    </Layout>
  );
};

export default Restaurants;
