import {
  VStack, HStack, Box, Image, Text, AspectRatio,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/Login/LoginForm';
import { RegistrationNavbar } from '../components/shared';
import { useRedirectLoggedIn } from '../utils/customHooks';

const Login = () => {
  useRedirectLoggedIn('/restaurants');
  return (
    <VStack spacing={0}>
      <RegistrationNavbar />
      <HStack display="flex" justifyContent="space-between" maxW="100vw">
        <Box
          w="49vw"
          h="100%"
          display={{ base: 'none', sm: 'none', md: 'flex' }}
        >
          <AspectRatio ratio={1} w="100%" display={{ sm: 'none', md: 'flex' }} h="100%">
            <Image
              src="./assets/images/login-sidebar.jpg"
              objectFit="cover"
              w="full"
              h="full"
            />
          </AspectRatio>
        </Box>
        <VStack
          flexShrink={0}
          h="full"
          W={{ sm: '90vw', md: '50vw' }}
          pt={10}
          pl={{ base: 8, sm: 16 }}
          m={{ sm: 'auto' }}
          pr={{ base: 8, sm: 16 }}
        >
          <Text fontSize="2xl" fontWeight="Bold">We&apos;re glad to see you!</Text>
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
};

export default Login;
