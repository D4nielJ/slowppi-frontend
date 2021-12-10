import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { fetchSingleRestaurant } from '../utils/actions/restaurants.actions';
import { useAuth } from '../utils/customHooks';

const RestaurantDetails = ({name = "", description = "", image = "", spots = 0, princeRange = 0, shifts = [], categories = []}) => {
  useAuth('/restaurants', ['', 'admin']);
  const dispatch = useDispatch();
  let { id } = useParams();
  const { user } = useSelector((state) => state.currentUser);
  const { selectedRestaurant } = useSelector((state) => state.restaurants);
  id = +id;

  useEffect(() => {
    if (user) {
      if (!selectedRestaurant || (selectedRestaurant && selectedRestaurant.id !== id)) {
        dispatch(fetchSingleRestaurant(user, id));
      }
    }
  }, [id, selectedRestaurant, user]);

  if (selectedRestaurant) {
    ({ name } = selectedRestaurant);
  }

  return (
    <Layout>
      {selectedRestaurant && (
        <div>{name}</div>
      )}
    </Layout>
  );
};

export default RestaurantDetails;
