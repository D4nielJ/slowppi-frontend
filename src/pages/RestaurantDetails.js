import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import {
  HStack, Image, Box, Text, Flex, Badge, Grid, Icon,
} from '@chakra-ui/react';
import { IoBookOutline, IoLogoUsd } from 'react-icons/io5';
import Layout from '../components/Layout/Layout';
import { fetchSingleRestaurant } from '../utils/actions/restaurants.actions';
import { useAuth } from '../utils/customHooks';
import { NavigationButton, Button } from '../components/shared';
import MenuImage from '../components/Restaurants/DetailsPage/MenuImage';

const RestaurantDetails = () => {
  useAuth('/restaurants', ['', 'admin']);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let { id } = useParams();

  const { user } = useSelector((state) => state.currentUser);
  const { selectedRestaurant } = useSelector((state) => state.restaurants);
  const { name, categories, priceRange } = selectedRestaurant ?? { name: 'No-name', categories: null, priceRange: 0 };

  useEffect(() => {
    if (user) {
      id = +id;
      if (!selectedRestaurant || (selectedRestaurant && selectedRestaurant.id !== id)) {
        dispatch(fetchSingleRestaurant(user, id));
      }
    }
  }, [id, selectedRestaurant, user]);

  return (
    <Layout>
      {selectedRestaurant && (
        <HStack h="100vh" spacing={0} position="relative">
          <Box h="100vh" flex="1 1 65%">
            <Image src="../assets/images/details.jpg" alt={name} objectFit="cover" h="full" w="full" />
          </Box>
          <NavigationButton position="absolute" bottom={40} onClick={() => { navigate(-1); }} isReversed />
          <Flex
            h="full"
            direction="column"
            flex="1 0 600px"
            alignItems="flex-end"
            pt={24}
            px={24}
            overflow="auto"
          >
            <HStack mb={2}>
              {categories && (
                categories.map((cat) => (
                  <Badge key={cat.id} bg="green.100" color="green.500" fontSize="sm" px={2}>{cat.name}</Badge>
                ))
              )}
            </HStack>
            <Text as="h2" fontSize="4xl" fontWeight="bold" textAlign="right" mb={-1.5}>{name}</Text>
            <Text as="h3" textAlign="right" mb={4} opacity="70%">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis provident sunt eos consequuntur?</Text>
            {priceRange && (
              <HStack spacing={0} mb={4}>
                {[...Array(priceRange).keys()].map((item) => (
                  <Icon key={item} as={IoLogoUsd} fontSize="xl" color="green.400" stroke="green.400" strokeWidth={24} />
                ))}
              </HStack>
            )}
            <Text as="h4" fontSize="xl" textAlign="right" fontStyle="italic" mb={4}>Our famous dishes:</Text>
            <Grid w="full" templateColumns="repeat(2, 1fr)" gap={6} mb={8}>
              <MenuImage src="../assets/images/sushi/sushi1.jpg" name="Kanikawa" />
              <MenuImage src="../assets/images/sushi/sushi2.jpg" name="Modern narezushi" />
              <MenuImage src="../assets/images/sushi/sushi3.jpg" name="Nigirizushi" />
              <MenuImage src="../assets/images/sushi/sushi4.jpg" name="Uramaki" />
            </Grid>
            <Button as="a" mb={8} href={`/restaurants/${id}/reserve`}>
              <HStack spacing={2}>
                <Icon as={IoBookOutline} fontSize="2xl" />
                <Text>Reservations</Text>
              </HStack>
            </Button>

          </Flex>
        </HStack>
      )}
    </Layout>
  );
};

export default RestaurantDetails;
