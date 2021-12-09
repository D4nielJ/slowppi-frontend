import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { fetchShifts } from '../utils/actions/shifts.actions';
import { fetchCategories } from '../utils/actions/categories.actions';
import { cleanRestaurants, fetchRestaurants, fetchRestaurantsInitial } from '../utils/actions/restaurants.actions';
import Layout from '../components/Layout/Layout';
import { useAuth } from '../utils/customHooks';
import { Button } from '../components/shared';

const Restaurants = () => {
  useAuth('/', ['', 'admin']);
  const dispatch = useDispatch();
  const { shifts } = useSelector((state) => state.shifts);
  const { categories } = useSelector((state) => state.categories);
  const {
    restaurants, prev, next, status,
  } = useSelector((state) => state.restaurants);
  const { user } = useSelector((state) => state.currentUser);
  const [page, setPage] = useState(1);
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
  }, [shifts, categories, restaurants, user]);

  useEffect(() => {
    sortRests(page);
  }, [page]);

  const handleNextPage = () => {
    if (Math.ceil(restaurants.length / 3) < page + 2) {
      dispatch(fetchRestaurants(user, page + 1));
    }

    setPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    setPage((prev) => prev - 1);
  };

  const handleCleanRedux = () => {
    dispatch(cleanRestaurants());
  };

  return (
    <Layout>
      <div>Hello World</div>
      <Button type="button" onClick={handlePrevPage} disabled={!prev}>Prev</Button>
      {sortedRests && sortedRests.map((rest) => (
        <div key={rest.id}>{rest.name}</div>
      ))}
      <Button type="button" onClick={handleNextPage} disabled={!next}>Next</Button>
      <Button type="button" onClick={handleCleanRedux}>Clean redux</Button>
    </Layout>
  );
};

export default Restaurants;
