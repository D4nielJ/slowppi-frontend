import {
  HStack, Icon, Text, Heading, Box,
} from '@chakra-ui/react';
import { IoArrowBackOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const RegistrationNavbar = () => (
  <Box as="nav" width="100%">
    <HStack p={8} borderBottom="1px" borderColor="gray.200" justifyContent="space-between">
      <Link to="/">
        <HStack>
          <Icon as={IoArrowBackOutline} fontSize="2xl" color="green.400" />
          <Text fontWeight="bold">Back</Text>
        </HStack>
      </Link>
      <Heading fontSize="xl" color="green.300" letterSpacing="widest" position="relative" right={20}>SLOWPPI</Heading>
      <div />
    </HStack>
  </Box>
);

export default RegistrationNavbar;
