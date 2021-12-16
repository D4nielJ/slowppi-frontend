import { useEffect, useState } from 'react';
import {
  Box, HStack, Text, Flex, Image,
} from '@chakra-ui/react';
import ReactDatePicker from 'react-datepicker';
import addDays from 'date-fns/addDays';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { format as formatDate } from 'date-fns';
import Layout from '../components/Layout/Layout';
import { createApi } from '../utils/helpers';
import { useAuth } from '../utils/customHooks';
import { fetchShifts } from '../utils/actions/shifts.actions';
import { NavigationButton } from '../components/shared';
import DatePicker from '../components/ReservationsCreate/DatePicker';

const ReservationsCreate = () => {
  useAuth('/restaurants', ['', 'admin']);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const { user } = useSelector((state) => state.currentUser);

  const { shifts } = useSelector((state) => state.shifts);
  const [date, setDate] = useState(new Date());
  const [shiftsAvailable, setShiftsAvailable] = useState(null);
  const [error, setError] = useState(null);

  const { token } = user ?? { token: null };
  const api = createApi(token);

  useEffect(() => {
    if (user && shifts.length === 0) {
      dispatch(fetchShifts(user));
    }
  }, [user, shifts]);

  useEffect(() => {
    const fetchFreeSpots = async () => {
      try {
        const { data: { body } } = await api.get(`v1/restaurants/${id}/availability/${formatDate(date, 'yyyy-MM-dd')}`);
        setShiftsAvailable(body);
        setError(null);
      } catch (err) {
        setError(err);
      }
    };
    if (id && date) {
      fetchFreeSpots();
    }
  }, [date, user]);

  const [reservationStatus, setReservationStatus] = useState(null);

  const handleReservation = (shiftName) => {
    const [{ name: shift }] = shifts.filter((shift) => shift.name === shiftName);
    const postReservation = async () => {
      const { data: { status } } = await api.post('v1/reservations', {
        date: formatDate(date, 'yyyy-MM-dd'),
        shift,
        restaurant_id: +id,
      });
      setReservationStatus(status);
    };
    postReservation();
  };

  useEffect(() => {
    if (reservationStatus === 'created') {
      navigate('/reservations', { replace: true });
    }
  });

  return (
    <Layout>
      <HStack h="100vh" spacing={0} position="relative">
        <Box h="100vh" flex="1 1 65%">
          <Image src="../../assets/images/details.jpg" alt="" objectFit="cover" h="full" w="full" />
        </Box>
        <NavigationButton position="absolute" bottom={40} onClick={() => { navigate(-1); }} isReversed />
        <Flex
          h="full"
          direction="column"
          flex="1 0 600px"
          alignItems="center"
          pt={24}
          px={24}
          overflow="auto"
          bg="green.300"
          color="white"
        >
          <Box px={8} w="full" mb={8}>
            <HStack
              minW="full"
              bg="white"
              rounded="full"
              position="relative"
              minH={16}
              justify="center"
            >
              <Box position="absolute" right={0} top={0} bottom={0}>
                <DatePicker date={date} setDate={setDate} />
              </Box>
              <Text
                color="green.300"
                fontSize="xl"
                fontWeight="BOLD"
              >
                {formatDate(date, 'do MMMM')}
              </Text>
            </HStack>
          </Box>
          <Text as="h4" fontSize="lg" w="full" mb={4}>Shifts available:</Text>
          {error && (
          <Text>
            Ups! We&apos;re sorry. Something went bad.
          </Text>
          )}
          {shiftsAvailable && !error && (
            Object.keys(shiftsAvailable).map((shift) => (
              <div key={shift}>
                <Text>{shift}</Text>
                <button type="button" onClick={() => handleReservation(shift)}>Make reservation</button>
              </div>
            ))
          )}
        </Flex>
      </HStack>
    </Layout>
  );
};

export default ReservationsCreate;

// <Box mb={4}>
//   <DateStripe date={date} setDate={setDate} />
// </Box>;
