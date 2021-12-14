import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  HStack,
  Flex,
  Text,
  List,
  ListItem,
  Button,
} from '@chakra-ui/react';
import { useAuth } from '../utils/customHooks';
import Layout from '../components/Layout/Layout';
import { createApi } from '../utils/helpers';

const Reservations = () => {
  useAuth('/', ['', 'admin']);

  const { user } = useSelector((state) => state.currentUser);
  const { restaurants } = useSelector((state) => state.restaurants);

  const [reservationsAvail, setReservationsAvail] = useState(null);

  useEffect(() => {
    const api = createApi(user.token);
    const fetchReservations = async () => {
      try {
        const { data } = await api.get('v1/reservations/');
        setReservationsAvail(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (user) {
      fetchReservations();
    }
  }, []);

  console.log(restaurants)
  console.log(reservationsAvail)

  return (
    <Layout>
      <HStack w="full" h="full" justify="space-between">
        <Flex h="full" direction="column" pt={20}>
          <Text
            mb={4}
            fontWeight="black"
            letterSpacing="wider"
            fontSize="2xl"
          >
            RESERVATIONS
          </Text>
            {reservationsAvail && reservationsAvail.map((res) => (
              <List w="full" rounded={10} backgroundColor="gray.100">
                <ListItem key={res.id} id={res.id} p={1} pl={3}>
                <HStack justify="space-between">
                  <Text as="h3" fontWeight="bold" color="gray.700" fontSize={20}></Text>
                  <Button colorScheme="red" variant="ghost" type="button">DELETE</Button>
                </HStack>
               </ListItem>
              </List>
            ))}
        </Flex>
      </HStack>
    </Layout>
  );
};

export default Reservations;
