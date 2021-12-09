import { HStack } from '@chakra-ui/react';
import RestCard from './RestaurantCard';

const Carousel = ({ rests }) => (
  <HStack spacing={28}>
    {rests && rests.map((rest) => (
      <RestCard key={rest.id} rest={rest} />
    ))}
  </HStack>
);

export default Carousel;
