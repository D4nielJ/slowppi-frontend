import {
  VStack, HStack, Box, Image,
} from '@chakra-ui/react';
import LoginForm from '../components/Login/LoginForm';
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
      <LoginForm />
    </HStack>
  </VStack>
);

export default Login;

