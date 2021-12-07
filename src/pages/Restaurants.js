import { useSelector } from 'react-redux';
import Layout from '../components/Layout/Layout';
import { useAuth } from '../utils/customHooks';

const Restaurants = () => {
  useAuth('/', ['', 'admin']);

  const { user } = useSelector((state) => state.currentUser);
  return (
    <Layout>
      Hello world
    </Layout>
  );
};

export default Restaurants;
