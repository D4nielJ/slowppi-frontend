import { HStack } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import RestCard from './RestaurantCard';

const Carousel = ({ rests }) => (
  <AnimatePresence initial={false} exitBeforeEnter>
    <HStack
      spacing={28}
      pt={12}
    >
      {rests && rests.map((rest) => (
        <RestCard key={rest.id} rest={rest} />
      ))}
    </HStack>
  </AnimatePresence>
);

Carousel.propTypes = {
  rests: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Carousel;
