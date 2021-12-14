import React, { useEffect, useState } from 'react';
import {
  VStack,
  HStack,
  Text,
  List,
  ListItem,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRestaurantsDelete, deleteRestaurant } from '../../utils/actions/restaurants.actions';

const DeleteList = ({ resetCurPage, filteredArray }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.currentUser);
  const { restaurantslist } = useSelector((state) => state.restaurants);

  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();
  const [idToDelete, setIdToDelete] = useState(0);

  useEffect(() => {
    if (user) {
      if (restaurantslist.length === 0) {
        dispatch(fetchRestaurantsDelete(user));
      }
    }
  }, [restaurantslist]);

  const deleteRestaurantClick = () => {
    dispatch(deleteRestaurant(user, idToDelete));
    setIsOpen(false);
    resetCurPage();
  };

  const openPopup = (element) => {
    setIdToDelete(element.target.parentNode.parentNode.id);
    setIsOpen(true);
  };

  return (
    <VStack>
      <List w="full" rounded={10} backgroundColor="gray.100">
        {filteredArray.map((rest) => (
          <ListItem key={rest.id} id={rest.id} p={1} pl={3} _hover={{ backgroundColor: 'gray.300' }}>
            <HStack justify="space-between">
              <Text as="h3" fontWeight="bold" color="gray.700" fontSize={20}>{rest.name}</Text>
              <Button colorScheme="red" variant="ghost" type="button" onClick={openPopup}>DELETE</Button>
            </HStack>
          </ListItem>
        ))}
      </List>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Restaurant
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You cannot undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={deleteRestaurantClick} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </VStack>
  );
};

DeleteList.propTypes = {
  resetCurPage: PropTypes.func.isRequired,
  filteredArray: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default DeleteList;
