import {
  VStack, Heading, HStack, Icon, Text,
} from '@chakra-ui/react';
import { IoEnterOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <VStack justifyContent="space-between" h="full" p={8} borderRight="1px" borderColor="gray.200">
    <Heading as="h2" fontSize="xl" color="green.300" letterSpacing="widest">SLOWPPI</Heading>
    <VStack as="nav" spacing={6}>
      <Link to="/restaurants">
        <Text>Restaurants</Text>
      </Link>
      <Link to="/restaurants">
        <Text>Restaurants</Text>
      </Link>
      <Link to="/restaurants">
        <Text>Restaurants</Text>
      </Link>
      <Link to="/restaurants">
        <Text>Restaurants</Text>
      </Link>
    </VStack>
    <HStack spacing={4}>
      <Icon as={IoEnterOutline} fontSize="3xl" />
      <Icon as={IoEnterOutline} fontSize="3xl" />
      <Icon as={IoEnterOutline} fontSize="3xl" />
      <Icon as={IoEnterOutline} fontSize="3xl" />
    </HStack>
  </VStack>
);

export default Navbar;
