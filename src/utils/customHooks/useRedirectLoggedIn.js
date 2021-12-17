import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useRedirectLoggedIn = (to = '/') => {
  const { user } = useSelector((state) => state.currentUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate(to, { replace: true });
    }
  }, [user]);
};
export default useRedirectLoggedIn;
