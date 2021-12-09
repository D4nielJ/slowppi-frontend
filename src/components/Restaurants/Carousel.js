import { HStack } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import RestCard from './RestaurantCard';

const MotionHStack = motion(HStack);

const Carousel = ({ rests }) => (

  <MotionHStack
    spacing={28}
  >
    <AnimatePresence initial={false}>
      {rests && rests.map((rest) => (
        <RestCard key={rest.id} rest={rest} />
      ))}
    </AnimatePresence>
  </MotionHStack>
);

export default Carousel;
