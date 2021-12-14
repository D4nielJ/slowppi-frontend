import { useAuth } from '../utils/customHooks';

const Reservations = () => {
  useAuth('/', ['', 'admin']);

  return (
    <h1>Res</h1>
  );
};

export default Reservations;
