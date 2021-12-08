import Layout from '../components/Layout/Layout';
import { useAuth } from '../utils/customHooks';

const Restaurants = () => {
  useAuth('/', ['', 'admin']);

  return (
    <Layout>
      Hello world
    </Layout>
  );
};

export default Restaurants;
