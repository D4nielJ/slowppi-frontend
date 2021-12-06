import { useDispatch } from 'react-redux';
import { registerUser } from '../utils/actions/currentUser.actions';
import { useControlledComp, useRedirectLoggedIn } from '../utils/customHooks';

const Logout = () => {
  useRedirectLoggedIn();
  const dispatch = useDispatch();
  const [firstName, setFirstName, handleFirstName] = useControlledComp('');
  const [lastName, setLastName, handleLastName] = useControlledComp('');
  const [email, setEmail, handleEmail] = useControlledComp('');
  const [password, setPassword, handlePassword] = useControlledComp('');
  const [passwordConfi, setPasswordConfi, handlePasswordConfi] = useControlledComp('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(firstName, lastName, email, password));
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setPasswordConfi('');
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        first name:
        <input type="text" onChange={handleFirstName} value={firstName} />
        last name:
        <input type="text" onChange={handleLastName} value={lastName} />
        email:
        <input type="email" onChange={handleEmail} value={email} />
        password:
        <input type="password" onChange={handlePassword} value={password} />
        confirm password:
        <input type="password" onChange={handlePasswordConfi} value={passwordConfi} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Logout;
