import { Box, HStack, Text } from '@chakra-ui/react';
import { format as formatDate } from 'date-fns';
import DatePicker from './DatePicker';

const Header = ({ date, setDate }) => (
  <Box bg="green.300" pt={24} pb={8} px={32} w="full">
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
  </Box>
);

export default Header;
