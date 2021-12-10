import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/Layout/Layout';
import { useAuth } from '../utils/customHooks';

const RestaurantDetails = () => {
  useAuth('/restaurants', ['', 'admin']);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { resturants } = useSelector((state) => state.restaurants);

  useEffect(() => {
    if (user && resturants.length === 0) {
      dispatch(fetchRestaurants(user));
    }
  }, [restaurants, user]);

  return (
    <Layout>
      <div>Hello world</div>
      <div>Hello world</div>
      <div>Hello world</div>
      <div>Hello world</div>
    </Layout>
  );
};

export default RestaurantDetails;
