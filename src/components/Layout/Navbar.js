import {
  VStack, Heading, HStack, Icon, Text, Link as ChakraLink,
} from '@chakra-ui/react';
import { IoEnterOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { logoutUser } from '../../utils/actions/currentUser.actions';
import { Button } from '../shared';

const ActiveLink = ({
  role = '', to = '/', children, ...props
}) => {
  const { pathname: path } = useLocation();

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
          <ActiveLink to="/admin">
            Admin
          </ActiveLink>
        </VStack>
      </VStack>
      <VStack spacing={4}>
        <HStack>
          <Button onClick={handleSignOut}>
            <HStack spacing={2}>
              <Text>
                Sign Out
              </Text>
              <Icon as={IoEnterOutline} fontSize="3xl" />
            </HStack>
          </Button>
        </HStack>
        <HStack spacing={4}>
          <Icon as={IoEnterOutline} fontSize="3xl" />
          <Icon as={IoEnterOutline} fontSize="3xl" />
          <Icon as={IoEnterOutline} fontSize="3xl" />
          <Icon as={IoEnterOutline} fontSize="3xl" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Navbar;
