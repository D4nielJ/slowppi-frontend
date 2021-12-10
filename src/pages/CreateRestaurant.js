import Layout from '../components/Layout/Layout';
import { useAuth } from '../utils/customHooks';

const CreateRestaurant = () => {
  useAuth('/restaurants', ['admin']);

  return (
    <Layout>
      <div>Hello world</div>
    </Layout>
  );
};

export default CreateRestaurant;
