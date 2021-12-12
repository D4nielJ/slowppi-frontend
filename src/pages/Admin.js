import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { useAuth } from '../utils/customHooks';

const Admin = () => {
  useAuth('/restaurants', ['admin']);
  return (
    <Layout>
      <div>Hello world</div>
      <Link to="/admin/delete">
        <button type="button">DELETE PAGE</button>
      </Link>
    </Layout>
  );
};

export default Admin;
