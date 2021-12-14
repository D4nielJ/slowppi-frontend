import { useEffect, useState } from 'react';
import {
  Box, HStack, Text, Flex, Image,
} from '@chakra-ui/react';
import ReactDatePicker from 'react-datepicker';
import addDays from 'date-fns/addDays';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import Layout from '../components/Layout/Layout';
import { createApi } from '../utils/helpers';
import { useAuth } from '../utils/customHooks';
import { fetchShifts } from '../utils/actions/shifts.actions';
import { NavigationButton } from '../components/shared';

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

  useEffect(() => {
    if (user && shifts.length === 0) {
      dispatch(fetchShifts(user));
    }
  }, [user, shifts]);

  useEffect(() => {
    const { token } = user ?? null;
    const api = createApi(token);
    const fetchFreeSpots = async () => {
      try {
        const { data: { body } } = await api.get(`v1/restaurants/${id}/availability/${format(date, 'yyyy-MM-dd')}`);
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
    const { token } = user ?? null;
    const postReservation = async () => {
      const api = createApi(token);
      const { data: { status } } = await api.post('v1/reservations', {
        date: format(date, 'yyyy-MM-dd'),
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
        >
          <ReactDatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            includeDateIntervals={[
              { start: new Date(), end: addDays(new Date(), 30) },
            ]}
          />
          {error && (
          <Text>
            Something went bad
            {' '}
            {error.status}
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
