import { useEffect, useMemo } from 'react';
import {
  Button, HStack, Text,
} from '@chakra-ui/react';

const DAYS_MAP = {
  0: 'SUN',
  1: 'MON',
  2: 'THU',
  3: 'WED',
  4: 'TUE',
  5: 'FRI',
  6: 'SAT',
};

const calcRange = (timestamp) => {
  const range = [...Array(11).keys()].map((item) => (
    new Date(timestamp + (86400000 * (item)))
  ));
  return range;
};

const DateStripe = ({ date, setDate }) => {
  const range = useMemo(() => (
    calcRange(Date.now())
  ), [calcRange]);

  useEffect(() => {

  }, date);

  const handleSelectDate = (idx) => {
    setDate(range[idx]);
  };

  return (
    <HStack w="29rem">
      {range.map((date, idx) => (
        <div key={date}>
          <Button
            type="button"
            onClick={() => { handleSelectDate(idx); }}
            display="flex"
            flexDirection="column"
            minW={20}
            px={4}
            py={10}
          >
            <Text fontSize="2xl" fontWeight="bold">{date.getDate()}</Text>
            <Text mb={1} fontSize="sm" fontWeight="500">{DAYS_MAP[date.getDay()]}</Text>
          </Button>
        </div>
      ))}
    </HStack>
  );
};

export default DateStripe;
