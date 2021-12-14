import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  HStack,
  Flex,
  Text,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { useAuth } from '../utils/customHooks';
import Layout from '../components/Layout/Layout';
import { createApi } from '../utils/helpers';

const Reservations = () => {
  useAuth('/', ['', 'admin']);

  const { user } = useSelector((state) => state.currentUser);

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
          <UnorderedList>
            {reservationsAvail && reservationsAvail.map((res) => (
              <ListItem key={res.id}>
                
              </ListItem>
            ))}
          </UnorderedList>
        </Flex>
      </HStack>
    </Layout>
  );
};

export default Reservations;
