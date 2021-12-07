import { useSelector } from 'react-redux';

const Restaurants = () => {
  const { user } = useSelector((state) => state.currentUser);
  return (
    <div>
      {user && (
      <div>Logged in</div>
      )}
    </div>
  );
};

export default Restaurants;
