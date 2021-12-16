import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  HStack, Text, Flex,
} from '@chakra-ui/react';
import { format as formatDate } from 'date-fns';
import Layout from '../components/Layout/Layout';
import { createApi } from '../utils/helpers';
import { useAuth } from '../utils/customHooks';
import { fetchShifts } from '../utils/actions/shifts.actions';
import { LeftBigImage } from '../components/shared';
import Header from '../components/ReservationsCreate/Header';

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
        <LeftBigImage src="../../assets/images/details.jpg" />
        <Flex
          h="full"
          direction="column"
          flex="1 0 600px"
          alignItems="center"
          overflow="auto"
        >
          <Header date={date} setDate={setDate} />
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
