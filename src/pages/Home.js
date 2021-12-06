import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../utils/actions/currentUser.actions';

const Home = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <section>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign up</Link>
      <button type="button" onClick={handleLogout}>Log out</button>
    </section>
  );
};

export default Home;
