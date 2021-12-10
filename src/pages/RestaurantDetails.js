import Layout from '../components/Layout/Layout';
import { useAuth } from '../utils/customHooks';

const RestaurantDetails = () => {
  useAuth('/restaurants', ['', 'admin']);

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
