import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { useAuth } from '../utils/customHooks';

const Admin = () => {
  useAuth('/restaurants', ['admin']);

  return (
    <Layout>
      <div>Hello world</div>
      <Link to="/admin/create-restaurant">
        <button type="button">CREATE RESTAURANT</button>
      </Link>
      <Link to="/admin/delete-restaurant">
        <button type="button">DELETE PAGE</button>
      </Link>
    </Layout>
  );
};

export default Admin;
