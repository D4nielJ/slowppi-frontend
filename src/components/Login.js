import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, logoutUser } from '../utils/actions/currentUser.actions';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('d4niel@test.com');
  const [password, setPassword] = useState('password');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="email" onChange={handleEmail} value={email} />
        <input type="password" onChange={handlePassword} value={password} />
        <button type="submit">Log in</button>
      </form>
      <button type="button" onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Login;
