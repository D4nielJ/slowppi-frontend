import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useRedirectLoggedIn = () => {
  const { user } = useSelector((state) => state.currentUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate('/', { replace: true });
    }
  }, [user]);
};

export default useRedirectLoggedIn;
