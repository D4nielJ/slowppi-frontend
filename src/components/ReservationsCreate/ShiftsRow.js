import {
  Text, Box, Image, AspectRatio,
} from '@chakra-ui/react';

const IMAGE_MAP = {
  Breakfast: '../../assets/images/shifts/breakfast.jpg',
  Lunch: '../../assets/images/shifts/lunch.jpg',
  Dinner: '../../assets/images/shifts/dinner.jpg',
};

const ShiftsRow = ({ shift, handleReservation, shiftsAvailable }) => (
  <Box w="full" onClick={() => { handleReservation(shift); }} _hover={{ cursor: 'pointer' }} role="group">
    <AspectRatio w="full" ratio={21 / 9}>
      <Box position="relative" rounded={8} transitionDuration="">
        <Image
          src={IMAGE_MAP[shift]}
          position="absolute"
          _groupHover={{ transform: 'scale(104%)' }}
          transition="ease-in-out"
          transitionProperty="all"
          transitionDuration="0.15s"
        />
        <Box
          position="absolute"
          color="white"
          bg="linear-gradient(90deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), transparent)"
          left={0}
          bottom={4}
          pl={4}
          pr={8}
          py={2}
        >
          <Text
            textTransform="uppercase"
            fontSize="2xl"
            fontWeight="bold"
            noOfLines={1}
          >
            {shift}
          </Text>
          <Text
            noOfLines={1}
          >
            Spots left:
            {' '}
            {shiftsAvailable[shift]}
          </Text>
        </Box>
      </Box>
    </AspectRatio>
  </Box>
);

export default ShiftsRow;
