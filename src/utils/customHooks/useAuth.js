import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { hasSomeRole } from '../helpers';

const useAuth = (to = '/restaurants', roles) => {
  const { user } = useSelector((state) => state.currentUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate('/login', { replace: true });
    }
    if (!hasSomeRole(user, roles)) {
      navigate(to, { replace: true });
    }
  }, [user]);
};

export default useAuth;
