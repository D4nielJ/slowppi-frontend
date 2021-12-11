import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  HStack, VStack, Image, AspectRatio, Box, Text, Heading,
} from '@chakra-ui/react';
import Layout from '../components/Layout/Layout';
import { fetchSingleRestaurant } from '../utils/actions/restaurants.actions';
import { useAuth } from '../utils/customHooks';

const RestaurantDetails = ({
  name = '', description = '', image = '', spots = 0, princeRange = 0, shifts = [], categories = [],
}) => {
  useAuth('/restaurants', ['', 'admin']);
  const dispatch = useDispatch();
  let { id } = useParams();
  const { user } = useSelector((state) => state.currentUser);
  const { selectedRestaurant } = useSelector((state) => state.restaurants);
  id = +id;

  useEffect(() => {
    if (user) {
      if (!selectedRestaurant || (selectedRestaurant && selectedRestaurant.id !== id)) {
        dispatch(fetchSingleRestaurant(user, id));
      }
    }
  }, [id, selectedRestaurant, user]);

  if (selectedRestaurant) {
    ({
      name, description, image, spots, princeRange, shifts, categories,
    } = selectedRestaurant);
  }

  return (
    <Layout>
      {selectedRestaurant && (
        <HStack h="100vh" spacing={0}>
          <AspectRatio h="100vh" flex="1 1 65%">
            <Image src="../assets/images/details.jpg" alt={name} objectFit="cover" h="full" w="full" />
          </AspectRatio>
          <VStack flex="1 0 500px">
            <Text as="h2" fontSize="3xl" fontWeight="bold">{name}</Text>
          </VStack>
        </HStack>
      )}
    </Layout>
  );
};

export default RestaurantDetails;
