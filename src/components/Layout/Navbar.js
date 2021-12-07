import {
  VStack, Heading, HStack, Icon, Text, Link as ChakraLink,
} from '@chakra-ui/react';
import {
  IoEnterOutline, IoLogoFacebook, IoLogoTwitter, IoLogoMedium, IoLogoGithub,
} from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { logoutUser } from '../../utils/actions/currentUser.actions';
import { hasSomeRole } from '../../utils/helpers';
import { Button } from '../shared';

const ActiveLink = ({
  roles, to = '/', children, ...props
}) => {
  const { pathname: path } = useLocation();
  const { user } = useSelector((state) => state.currentUser);

  if (!hasSomeRole(user, roles)) {
    return null;
  }

  let activeLinkProps = {};
  if (path === to) {
    activeLinkProps = {
      bg: 'green.300',
      color: 'white',
    };
  }

  return (
    <RouterLink to={to}>
      <ChakraLink
        textTransform="uppercase"
        fontWeight="black"
        color="gray.700"
        fontSize="xl"
        p={4}
        pr={16}
        ml={8}
        {...props}
        {...activeLinkProps}
      >
        {children}
      </ChakraLink>
    </RouterLink>
  );
};

const Navbar = () => {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(logoutUser());
  };
  return (
    <VStack justifyContent="space-between" h="full" py={8} borderRight="1px" borderColor="gray.200">
      <VStack spacing={48}>
        <Heading as="h2" fontSize="xl" color="green.300" letterSpacing="widest">SLOWPPI</Heading>
        <VStack as="nav" spacing={6} align="left">
          <ActiveLink to="/restaurants">
            Restaurants
          </ActiveLink>
          <ActiveLink to="/categories">
            Categories
          </ActiveLink>
          <ActiveLink to="/shifts">
            Shifts
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
        <HStack spacing={4}>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <Icon as={IoLogoFacebook} fontSize="2xl" />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <Icon as={IoLogoTwitter} fontSize="2xl" />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <Icon as={IoLogoMedium} fontSize="2xl" />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <Icon as={IoLogoGithub} fontSize="2xl" />
          </a>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Navbar;
