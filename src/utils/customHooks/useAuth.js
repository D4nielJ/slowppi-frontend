import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useAuth = (to = '/restaurants', roles = ['']) => {
  const { user } = useSelector((state) => state.currentUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate('/login', { replace: true });
    }
    if (user && !roles.some((role) => role === user.role)) {
      navigate(to, { replace: true });
    }
  }, [user]);
};

export default useAuth;
