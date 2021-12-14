import { useEffect, useMemo, useState } from 'react';
import {
  Box, HStack, Text, VStack,
} from '@chakra-ui/react';
import ReactDatePicker from 'react-datepicker';
import addDays from 'date-fns/addDays';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import Layout from '../components/Layout/Layout';
import DateStripe from '../components/ReservationsCreate/DateStripe';
import { createApi } from '../utils/helpers';
import { useAuth } from '../utils/customHooks';
import { fetchShifts } from '../utils/actions/shifts.actions';

const ReservationsCreate = () => {
  useAuth('/restaurants', ['', 'admin']);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const { user } = useSelector((state) => state.currentUser);

  const { shifts } = useSelector((state) => state.shifts);
  const [date, setDate] = useState(addDays(new Date(), 1));
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
      navigate('/', { replace: true });
    }
  });

  return (
    <Layout>
      <VStack h="100vh" pt={28}>
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
      </VStack>
    </Layout>
  );
};

export default ReservationsCreate;

// <Box mb={4}>
//   <DateStripe date={date} setDate={setDate} />
// </Box>;
