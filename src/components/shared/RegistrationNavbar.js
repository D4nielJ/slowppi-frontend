import {
  HStack, Icon, Text, Heading,
} from '@chakra-ui/react';
import { IoArrowBackOutline } from 'react-icons/io5';

const RegistrationNavbar = () => (
  <HStack p={8} borderBottom="1px" borderColor="gray.200" width="100%" justifyContent="space-between">
    <HStack>
      <Icon as={IoArrowBackOutline} fontSize="2xl" color="green.400" />
      <Text fontWeight="bold">Back</Text>
    </HStack>
    <Heading fontSize="xl" color="green.300" letterSpacing="widest">SLOWPPI</Heading>
    <div />
  </HStack>
);

export default RegistrationNavbar;
