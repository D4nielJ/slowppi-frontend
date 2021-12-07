import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import {
  VStack,
  Text,
  Icon,
  HStack,
} from '@chakra-ui/react';
import { IoEnterOutline } from 'react-icons/io5';
import { Button } from '../shared';
import { TextInput } from '../shared/Forms';
import { registerUser } from '../../utils/actions/currentUser.actions';

const SignupForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
        password: Yup.string()
          .min(8, 'Password is too short (8 chars minimum).')
          .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, // This validation needs improvement
            'Password must have at least one number and one letter')
          .required('Required'),
        passwordConfirmation: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match'),
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
              label="First name"
              name="firstName"
              type="text"
              placeholder="First name"
            />

            <TextInput
              label="Last name"
              name="lastName"
              type="text"
              placeholder="Last name"
            />

            <TextInput
              label="Email address"
              name="email"
              type="email"
              placeholder="Email address"
            />

            <TextInput
              label="Password"
              name="password"
              type="password"
              placeholder="Password"
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

  );
};

export default SignupForm;

SignupForm.defaultProps = {
  isSubmitting: false,
};

SignupForm.propTypes = {
  isSubmitting: PropTypes.bool,
};
