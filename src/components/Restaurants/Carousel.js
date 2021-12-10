import { HStack } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import RestCard from './RestaurantCard';

const Carousel = ({ rests }) => (
  <HStack
    spacing={28}
    pt={12}
  >
    <AnimatePresence initial={false} exitBeforeEnter>
      {rests && rests.map((rest) => (
        <RestCard key={rest.id} rest={rest} />
      ))}
    </AnimatePresence>
  </HStack>

);

export default Carousel;
