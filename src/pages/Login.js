import {
  VStack, HStack, Box, Image, Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
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
      <VStack
        flexShrink={0}
        w="full"
        h="full"
        maxW="72%"
        pt={16}
        spacing={16}
      >
        <Text fontSize="3xl" fontWeight="Bold">We&apos;re glad to see you!</Text>
        <LoginForm />
        <HStack>
          <Text>
            Haven&apos;t you registered yet?
          </Text>
          <Text color="green.500" textDecor="underline" _hover={{ color: 'gray.700' }}><Link to="/signup">Register here!</Link></Text>
        </HStack>
      </VStack>
    </HStack>
  </VStack>
);

export default Login;
