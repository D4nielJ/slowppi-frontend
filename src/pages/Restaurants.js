import { useSelector } from 'react-redux';
import { Layout } from '../components/shared';

const Restaurants = () => {
  const { user } = useSelector((state) => state.currentUser);
  return (
    <Layout>
      Hello world
    </Layout>
  );
};

export default Restaurants;
