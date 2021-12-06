import {
  VStack, HStack, Box, Text, Image,
} from '@chakra-ui/react';
import { RegistrationNavbar } from '../components/shared';

const Login = () => (
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
          src="./assets/images/login-sidebar.jpg"
          objectFit="cover"
          w="full"
          h="full"
        />
      </Box>
      <VStack
        flexShrink={0}
        w="full"
        h="full"
        maxW="72%"
        pt={8}
      >
        <Text fontSize="3xl" fontWeight="Bold">Log in</Text>
      </VStack>
    </HStack>
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
