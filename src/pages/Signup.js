import {
  VStack, HStack, Box, Image,
} from '@chakra-ui/react';
import SignupForm from '../components/Logout/SignupForm';
import { RegistrationNavbar } from '../components/shared';

const Signup = () => (
  <VStack h="full" spacing={0}>
    <RegistrationNavbar />
    <HStack
      flexShrink={0}
      w="full"
      h="full"
      alignItems="stretch"
    >
      <Box
        flexShrink={1}
        w="full"
        h="full"
        bgColor="yellow.200"
      >
        <Image
          src="./assets/images/signup-sidebar.jpg"
          objectFit="cover"
          w="full"
          h="full"
        />
      </Box>
      <SignupForm />
    </HStack>
  </VStack>
);

export default Signup;

// import { useDispatch } from 'react-redux';
// import { registerUser } from '../utils/actions/currentUser.actions';
// import { useControlledComp, useRedirectLoggedIn } from '../utils/customHooks';

// const Signup = () => {
//   useRedirectLoggedIn();
//   const dispatch = useDispatch();
//   const [firstName, handleFirstName] = useControlledComp('');
//   const [lastName, handleLastName] = useControlledComp('');
//   const [email, handleEmail] = useControlledComp('');
//   const [password, handlePassword] = useControlledComp('');
//   const [passwordConfi, handlePasswordConfi] = useControlledComp('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(registerUser(firstName, lastName, email, password));
//   };

//   return (
//     <div>
//       <form action="" onSubmit={handleSubmit}>
//         first name:
//         <input type="text" onChange={handleFirstName} value={firstName} />
//         last name:
//         <input type="text" onChange={handleLastName} value={lastName} />
//         email:
//         <input type="email" onChange={handleEmail} value={email} />
//         password:
//         <input type="password" onChange={handlePassword} value={password} />
//         confirm password:
//         <input type="password" onChange={handlePasswordConfi} value={passwordConfi} />
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;
