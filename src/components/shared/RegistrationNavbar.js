import {
  HStack, Icon, Text, Heading, Box,
} from '@chakra-ui/react';
import { IoArrowBackOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const RegistrationNavbar = () => (
  <Box as="nav" width="100%">
    <HStack p={8} borderBottom="1px" w="100%" borderColor="gray.200" justifyContent={{ sm: 'space-evenly', md: 'space-between' }}>
      <Link to="/">
        <HStack>
          <Icon as={IoArrowBackOutline} fontSize="2xl" color="green.400" />
          <Text fontWeight="bold" display={{ base: 'none', sm: 'none', md: 'flex' }}>Back</Text>
        </HStack>
      </Link>
      <Heading w="100%" fontSize="xl" color="green.300" letterSpacing="widest" textAlign="center">SLOWPPI</Heading>
    </HStack>
  </Box>
);

export default RegistrationNavbar;
