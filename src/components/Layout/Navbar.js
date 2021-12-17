import { useDispatch } from 'react-redux';

import {
  VStack, Heading, HStack, Icon, Text,
} from '@chakra-ui/react';

import {
  IoEnterOutline, IoLogoFacebook, IoLogoTwitter, IoLogoMedium, IoLogoGithub,
} from 'react-icons/io5';

import { logoutUser } from '../../utils/actions/currentUser.actions';
import { Button } from '../shared';
import ActiveLink from './ActiveLink';

const Navbar = () => {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(logoutUser());
  };
  return (
    <VStack justifyContent="space-between" h="full" py={8} borderRight="1px" borderColor="gray.200">
      <VStack spacing={48}>
        <Heading as="h2" fontSize="xl" color="green.300" letterSpacing="widest">SLOWPPI</Heading>
        <VStack as="nav" spacing={2} textAlign="left" position="relative" pl={10} align="stretch">
          <ActiveLink to="/restaurants">
            Restaurants
          </ActiveLink>
          <ActiveLink to="/reservations">
            Reservations
          </ActiveLink>
          <ActiveLink to="/blog">
            Blog
          </ActiveLink>
          <ActiveLink to="/admin" roles={['admin']}>
            Admin
          </ActiveLink>
        </VStack>
      </VStack>
      <VStack spacing={10}>
        <HStack>
          <Button onClick={handleSignOut}>
            <HStack spacing={2}>
              <Text>
                Sign Out
              </Text>
              <Icon as={IoEnterOutline} fontSize="2xl" />
            </HStack>
          </Button>
        </HStack>
        <HStack spacing={6}>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <Icon as={IoLogoFacebook} fontSize="2xl" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <Icon as={IoLogoTwitter} fontSize="2xl" />
          </a>
          <a href="https://medium.com/" target="_blank" rel="noopener noreferrer">
            <Icon as={IoLogoMedium} fontSize="2xl" />
          </a>
          <a href="https://github.com/leonardodiasb/final-capstone-back-end" target="_blank" rel="noopener noreferrer">
            <Icon as={IoLogoGithub} fontSize="2xl" />
          </a>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Navbar;
