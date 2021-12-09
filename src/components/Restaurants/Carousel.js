import RestCard from './RestaurantCard';

const Carousel = ({ rests }) => (
  <div>
    {rests && rests.map((rest) => (
      <RestCard key={rest.id} rest={rest} />
    ))}
  </div>
);

export default Carousel;
