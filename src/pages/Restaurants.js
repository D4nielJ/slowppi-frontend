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
  const { shifts } = useSelector((state) => state.shifts);
  const { categories } = useSelector((state) => state.categories);
  const { restaurants } = useSelector((state) => state.restaurants);

  const path = useLocation();
  const currentPage = path.search.split('=')[1];
  const previousPage = parseInt(currentPage, 10) - 1;
  const nextPage = parseInt(currentPage, 10) + 1;

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.currentUser);

  const handlePageClick = async (data) => {
    if (data.target.text === 'PREVIOUS') {
      if (previousPage > 0) {
        dispatch(fetchRestaurants(user, previousPage));
      }
    }

    if (data.target.text === 'NEXT') {
      dispatch(fetchRestaurants(user, nextPage));
    }
  };

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
      <RouterLink to="?page=1" onClick={handlePageClick}>PREVIOUS</RouterLink>
      {restaurants.map((item) => (
        <div key={item.id}>
          <div>
            <p>
              Name:
              {item.name}
            </p>
          </div>
          <div>
            <p>
              Description:
              {item.description}
            </p>
          </div>
        </div>
      ))}
      <RouterLink to="?page=2" onClick={handlePageClick}>NEXT</RouterLink>
    </Layout>
  );
};

export default Restaurants;
