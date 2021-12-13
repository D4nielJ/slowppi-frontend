import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  VStack,
  Text,
  HStack,
  CheckboxGroup,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useAuth } from '../utils/customHooks';
import Layout from '../components/Layout/Layout';
import { Button } from '../components/shared';
import { TextInput } from '../components/shared/Forms';
import TextArea from '../components/shared/Forms/TextArea';
import CheckboxInput from '../components/shared/Forms/CheckboxInput';
import { fetchShifts } from '../utils/actions/shifts.actions';
import { fetchCategories } from '../utils/actions/categories.actions';
import { createRestaurant } from '../utils/actions/restaurants.actions';

const CreateRestaurant = () => {
  useAuth('/restaurants', ['admin']);

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.currentUser);
  const { shifts } = useSelector((state) => state.shifts);
  const { categories } = useSelector((state) => state.categories);
  // const { status } = useSelector((state) => state.restaurants); For redirect

  useEffect(() => {
    if (user) {
      if (shifts.length === 0) {
        dispatch(fetchShifts(user));
      }
      if (categories.length === 0) {
        dispatch(fetchCategories(user));
      }
    }
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
          checkedShifts: [],
          checkedCategories: [],
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
          reservationSpots: Yup.number()
            .positive('Must have at least one spot available')
            .integer('Must be an integer')
            .required('Required'),
          priceRange: Yup.number()
            .positive('Must have at least one spot available')
            .lessThan(6, 'Must be a number between 1 and 5')
            .integer('Must be an integer')
            .required('Required'),
        })}
        onSubmit={async ({
          name, image, description, reservationSpots, priceRange, checkedCategories, checkedShifts,
        }, { setSubmitting }) => {
          await dispatch(createRestaurant(
            user,
            name,
            image,
            description,
            reservationSpots,
            priceRange,
            checkedCategories,
            checkedShifts,
          ));
          // Redirect when success.
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

              <TextArea
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
                label="Price Range"
                name="priceRange"
                type="text"
                placeholder="Price Range"
              />

              <CheckboxGroup>
                <HStack>
                  {categories.map((cat) => (
                    <CheckboxInput
                      key={cat.id}
                      id={cat.id}
                      name="checkedCategories"
                      label="categories"
                      type="checkbox"
                      description={cat.name}
                    />
                  ))}
                </HStack>
              </CheckboxGroup>

              <CheckboxGroup>
                <HStack>
                  {shifts.map((s) => (
                    <CheckboxInput
                      key={s.id}
                      id={s.id}
                      name="checkedShifts"
                      label="shifts"
                      type="checkbox"
                      description={s.name}
                    />
                  ))}
                </HStack>
              </CheckboxGroup>

              <Button type="submit" isLoading={props.isSubmitting}>
                <HStack spacing={4}>
                  <Text>Create Restaurant</Text>
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
