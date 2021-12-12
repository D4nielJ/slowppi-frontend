import {
  VStack,
  HStack,
  Text,
  List,
  ListItem,
  Button,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRestaurantsDelete, deleteRestaurant } from '../../utils/actions/restaurants.actions';

const DeleteList = ({ curPage, itemLimit }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.currentUser);
  const { restaurantslist } = useSelector((state) => state.restaurants);
  const [curItems, setCurItems] = useState([]);

  useEffect(() => {
    if (user) {
      if (restaurantslist.length === 0) {
        dispatch(fetchRestaurantsDelete(user));
      }
    }
  }, [restaurantslist]);

  const deleteRestaurantClick = (element) => {
    dispatch(deleteRestaurant(user, element.target.parentNode.parentNode.id));
  };

  useEffect(() => {
    const offset = curPage * itemLimit;
    const getList = (curPage, itemLimit) => {
      setCurItems(restaurantslist.slice(offset, offset + itemLimit));
    };

    getList(curPage, itemLimit);
  }, [curPage, itemLimit, restaurantslist]);

  return (
    <VStack m={10}>
      <List w="500px" rounded={10} backgroundColor="gray.100">
        {curItems.map((rest) => (
          <ListItem key={rest.id} id={rest.id} p={1} pl={3} _hover={{ backgroundColor: 'gray.300' }}>
            <HStack justify="space-between">
              <Text as="h3" fontWeight="bold" color="gray.700" fontSize={20}>{rest.name}</Text>
              <Button colorScheme="red" variant="ghost" type="button" onClick={deleteRestaurantClick}>DELETE</Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

DeleteList.propTypes = {
  curPage: PropTypes.number.isRequired,
  itemLimit: PropTypes.number.isRequired,
};

export default DeleteList;
