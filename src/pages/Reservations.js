import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  HStack,
  Flex,
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
import { useAuth } from '../utils/customHooks';
import Layout from '../components/Layout/Layout';
import { createApi } from '../utils/helpers';
import { fetchRestaurantsDelete } from '../utils/actions/restaurants.actions';

const Reservations = () => {
  useAuth('/', ['', 'admin']);

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.currentUser);
  const { restaurantslist } = useSelector((state) => state.restaurants);

  const [reservationsAvail, setReservationsAvail] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef(null);
  const [resToDelete, setResToDelete] = useState(null);

  const api = createApi(user.token);
  const fetchReservations = async () => {
    const { data } = await api.get('v1/reservations/');
    setReservationsAvail(data);
  };

  useEffect(() => {
    if (user) {
      fetchReservations();
    }
  }, []);

  useEffect(() => {
    if (user) {
      if (restaurantslist.length === 0) {
        dispatch(fetchRestaurantsDelete(user));
      }
    }
  }, [restaurantslist]);

  const restaurantsSerialize = {};
  restaurantslist.forEach(({ id, name }) => {
    restaurantsSerialize[id] = name;
  });

  const handleCancelReservation = () => {
    const { token } = user ?? null;
    const cancelReservation = async () => {
      const api = createApi(token);
      await api.delete(`v1/reservations/${resToDelete}`);
      fetchReservations();
    };
    cancelReservation();
    setIsOpen(false);
  };

  const openPopup = (id) => {
    setIsOpen(true);
    setResToDelete(id);
  };

  return (
    <Layout>
      <HStack w="full" h="full" justify="center">
        <Flex h="full" direction="column" pt={20}>
          <Text
            mb={4}
            fontWeight="black"
            letterSpacing="wider"
            fontSize="2xl"
          >
            RESERVATIONS
          </Text>
          <List w="full" rounded={10} backgroundColor="gray.100">
            {reservationsAvail && reservationsAvail.map((res) => (

              <ListItem key={res.id} id={res.id} p={1} pl={3}>
                <HStack justify="space-between">
                  <Text as="h3" fontWeight="bold" color="gray.700" fontSize={20}>{restaurantsSerialize[res.restaurant_id]}</Text>
                  <Button colorScheme="red" variant="ghost" type="button" onClick={() => openPopup(res.id)}>DELETE</Button>
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
                  Cancel Reservation
                </AlertDialogHeader>

                <AlertDialogBody>
                  Are you sure? You cannot undo this action.
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="red" onClick={handleCancelReservation} ml={3}>
                    Delete
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </Flex>
      </HStack>
    </Layout>
  );
};

export default Reservations;
