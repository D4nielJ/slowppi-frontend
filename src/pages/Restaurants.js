import { useSelector } from 'react-redux';
import Layout from '../components/Layout/Layout';

const Restaurants = () => {
  const { user } = useSelector((state) => state.currentUser);
  return (
    <Layout>
      Hello world
    </Layout>
  );
};

export default Restaurants;
