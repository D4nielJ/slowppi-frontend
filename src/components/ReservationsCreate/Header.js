import {
  VStack, Box, HStack, Text,
} from '@chakra-ui/react';
import { format as formatDate } from 'date-fns';
import DatePicker from './DatePicker';

const Header = ({ date, setDate, name }) => (
  <VStack bg="green.300" pt={24} pb={8} px={32} w="full" color="white">
    <VStack spacing={0} mb={2}>
      <Text as="h2" fontSize="4xl" fontWeight="bold" mb={-1.5}>{name}</Text>
      <Text as="h3" textAlign="right" opacity="70%">
        Shifts available on restaurant
      </Text>
    </VStack>
    <HStack
      minW="full"
      bg="white"
      rounded="full"
      position="relative"
      minH={16}
      justify="center"
    >
      <Box position="absolute" right={0} top={0} bottom={0}>
        <DatePicker date={date} setDate={setDate} />
      </Box>
      <Text
        color="green.300"
        fontSize="xl"
        fontWeight="BOLD"
      >
        {formatDate(date, 'do MMMM')}
      </Text>
    </HStack>
  </VStack>
);

export default Header;
