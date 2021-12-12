import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  VStack, Text, HStack,
} from '@chakra-ui/react';
import { fetchShifts } from '../utils/actions/shifts.actions';
import { fetchCategories } from '../utils/actions/categories.actions';
import {
  decrementPage, fetchRestaurants, fetchRestaurantsInitial, incrementPage,
} from '../utils/actions/restaurants.actions';
import Layout from '../components/Layout/Layout';
import { useAuth } from '../utils/customHooks';
import { NavigationButton } from '../components/shared';
import Carousel from '../components/Restaurants/Carousel';

const Restaurants = () => {
  useAuth('/', ['', 'admin']);
  const dispatch = useDispatch();
  const { shifts, status: shiftsStatus } = useSelector((state) => state.shifts);
  const { categories, status: categoriesStatus } = useSelector((state) => state.categories);
  const { restaurants, page, status } = useSelector((state) => state.restaurants);
  const { user } = useSelector((state) => state.currentUser);
  const [sortedRests, setSortedRests] = useState([]);

  const sortRests = (page) => {
    const range = (page * 3);
    setSortedRests(restaurants.slice(range - 3, range));
  };

  useEffect(() => {
    if (user) {
      if (shiftsStatus !== 'loading' && shifts.length === 0) {
        dispatch(fetchShifts(user));
      }
      if (categoriesStatus !== 'loading' && categories.length === 0) {
        dispatch(fetchCategories(user));
      }
      if (status !== 'loading' && restaurants.length === 0) {
        dispatch(fetchRestaurantsInitial(user));
      }
    }
    sortRests(page);
  }, [shifts, categories, restaurants, user, page]);

  const handleNextPage = () => {
    if (Math.ceil(restaurants.length / 3) < page + 2) {
      dispatch(fetchRestaurants(user, page + 1));
    }

    dispatch(incrementPage());
  };

  const handlePrevPage = () => {
    dispatch(decrementPage());
  };

  return (
    <Layout>
      <VStack
        w="full"
        spacing={16}
      >
        <VStack spacing={0}>
          <Text
            pt={28}
            fontWeight="black"
            letterSpacing="wider"
            fontSize="4xl"
          >
            OUR BEST RESTAURANTS
          </Text>
          <Text
            mb={12}
            color="gray.400"
            fontWeight="bold"
            fontSize="lg"
          >
            Select a Restaurant that you like
          </Text>
        </VStack>
        <HStack w="full" justify="space-between">
          <NavigationButton onClick={handlePrevPage} disabled={page === 1} isReversed />
          <Carousel rests={sortedRests} />
          <NavigationButton
            onClick={handleNextPage}
            disabled={Math.ceil(restaurants.length / 3) < page + 1}
          />
        </HStack>
      </VStack>
    </Layout>
  );
};

export default Restaurants;
