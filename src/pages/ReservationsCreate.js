import { useMemo, useState } from 'react';
import {
  Box, HStack, Text, VStack,
} from '@chakra-ui/react';
import Layout from '../components/Layout/Layout';
import DateStripe from '../components/ReservationsCreate/DateStripe';

const ReservationsCreate = () => {
  const [date, setDate] = useState(new Date());

  return (
    <Layout>
      <VStack h="100vh" justify="center">
        <Box mb={4}>
          <DateStripe date={date} setDate={setDate} />
        </Box>
        <Text fontSize="xl">{date.toDateString()}</Text>
      </VStack>
    </Layout>
  );
};

export default ReservationsCreate;
