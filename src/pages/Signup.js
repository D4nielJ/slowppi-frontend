import {
  VStack, HStack, Box, Image, Text, AspectRatio,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import SignupForm from '../components/Signup/SignupForm';
import { RegistrationNavbar } from '../components/shared';
import { useRedirectLoggedIn } from '../utils/customHooks';

const Signup = () => {
  useRedirectLoggedIn('/restaurants');

  return (
    <VStack h="100vh" spacing={0}>
      <RegistrationNavbar />
      <HStack display="flex" justifyContent="space-between" maxW="100vw">
        <Box
          w="49vw"
          h="100%"
          display={{ base: 'none', sm: 'none', md: 'flex' }}
        >
          <AspectRatio ratio={1} w="100%" display={{ sm: 'none', md: 'flex' }} h="100%">
            <Image
              src="./assets/images/signup-sidebar.jpg"
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
          <Text fontSize="3xl" fontWeight="Bold">Welcome!</Text>
          <SignupForm />
          <HStack>
            <Text>
              Already registered?
            </Text>
            <Text color="green.500" textDecor="underline" _hover={{ color: 'gray.700' }}>
              <Link to="/login">Log in here!</Link>
            </Text>
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Signup;
