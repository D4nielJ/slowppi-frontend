import { VStack, HStack } from '@chakra-ui/react';
import { RegistrationNavbar } from '../components/shared';

const Login = () => (
  <VStack>
    <RegistrationNavbar />
    <HStack />
    { // Nav component
    // Body
    // HStack
    // ImageOnTheLeft
    // FormOnTheRight
}
  </VStack>
);

export default Login;

// import { useDispatch } from 'react-redux';
// import { loginUser, logoutUser } from '../utils/actions/currentUser.actions';
// import { useControlledComp, useRedirectLoggedIn } from '../utils/customHooks';

// const Login = () => {
//   useRedirectLoggedIn();
//   const dispatch = useDispatch();
//   const [email, handleEmail] = useControlledComp('');
//   const [password, handlePassword] = useControlledComp('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(loginUser(email, password));
//   };

//   const handleLogout = () => {
//     dispatch(logoutUser());
//   };

//   return (
//     <div>
//       <form action="" onSubmit={handleSubmit}>
//         <input type="email" onChange={handleEmail} value={email} />
//         <input type="password" onChange={handlePassword} value={password} />
//         <button type="submit">Log in</button>
//       </form>
//       <button type="button" onClick={handleLogout}>Log out</button>
//     </div>
//   );
// };

// export default Login;
