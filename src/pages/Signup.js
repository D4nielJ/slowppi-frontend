import {
  VStack, HStack, Box, Image, Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
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
      <VStack
        flexShrink={0}
        w="full"
        h="full"
        maxW="72%"
        pt={16}
        spacing={16}
      >
        <Text fontSize="3xl" fontWeight="Bold">Welcome!</Text>
        <SignupForm />
        <HStack>
          <Text>
            Alredy registered?
          </Text>
          <Text color="green.500" textDecor="underline" _hover={{ color: 'gray.700' }}>
            <Link to="/login">Log in here!</Link>
          </Text>
        </HStack>
      </VStack>
    </HStack>
  </VStack>
);

export default Signup;
