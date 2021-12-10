import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  VStack,
  Text,
  Icon,
  HStack,
} from '@chakra-ui/react';
import { IoEnterOutline } from 'react-icons/io5';
import PropTypes from 'prop-types';
import { registerUser } from '../utils/actions/currentUser.actions';
import { useAuth } from '../utils/customHooks';
import Layout from '../components/Layout/Layout';
import { Button } from '../components/shared';
import { TextInput } from '../components/shared/Forms';
import { fetchShifts } from '../utils/actions/shifts.actions';
import { fetchCategories } from '../utils/actions/categories.actions';

const CreateRestaurant = () => {
  useAuth('/restaurants', ['admin']);

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.currentUser);
  const { shifts } = useSelector((state) => state.shifts);
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    if (user) {
      if (shifts.length === 0) {
        dispatch(fetchShifts(user));
      }
      if (categories.length === 0) {
        dispatch(fetchCategories(user));
      }
    }
    console.log(shifts, categories);
  }, [shifts, categories]);

  return (
    <Layout>
      <Formik
        initialValues={{
          name: '',
          image: '',
          description: '',
          reservationSpots: '',
          priceRange: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          image: Yup.string()
            .url('Must be a valid URL (Please, include http:// or https://)')
            .required('Required'),
          description: Yup.string()
            .max(180, 'Must be 180 characters or less')
            .required('Required'),
          reservationSpots: Yup.number('Must be a positive number'),
          priceRange: Yup.number()
            // .integer('Must be a number')
            // .positive('Must be a positivenumber')
            // .min(1, 'The price range should be between 1 and 5')
            // .max(5, 'The price range should be between 1 and 5')
            .required('Required'),
        })}
        onSubmit={async ({
          firstName, lastName, email, password,
        }, { setSubmitting }) => {
          await dispatch(registerUser(firstName, lastName, email, password));
          setSubmitting(false);
        }}
      >
        {(props) => (
          <Form>
            <VStack spacing={8}>
              <TextInput
                label="Restaurant Name"
                name="name"
                type="text"
                placeholder="Restaurant Name"
              />

              <TextInput
                label="Image URL"
                name="image"
                type="text"
                placeholder="Image URL"
              />

              <TextInput
                label="Description"
                name="description"
                type="text"
                placeholder="Description"
              />

              <TextInput
                label="Spots Available"
                name="reservationSpots"
                type="text"
                placeholder="Spots Available"
              />

              <TextInput
                label="Password confirmation"
                name="passwordConfirmation"
                type="password"
                placeholder="Password confirmation"
              />

              <Button type="submit" isLoading={props.isSubmitting}>
                <HStack spacing={4}>
                  <Text>Sign up</Text>
                  <Icon as={IoEnterOutline} fontSize="2xl" />
                </HStack>
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

CreateRestaurant.defaultProps = {
  isSubmitting: false,
};

CreateRestaurant.propTypes = {
  isSubmitting: PropTypes.bool,
};

export default CreateRestaurant;
