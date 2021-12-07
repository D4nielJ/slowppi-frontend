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
import { loginUser } from '../../utils/actions/currentUser.actions';
import { useRedirectLoggedIn } from '../../utils/customHooks';

const LoginForm = () => {
  useRedirectLoggedIn('/restaurants');
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
        password: Yup.string()
          .required('Required'),
      })}
      onSubmit={async ({ email, password }, { setSubmitting }) => {
        await dispatch(loginUser(email, password));
        setSubmitting(false);
      }}
    >
      {(props) => (
        <Form>
          <VStack spacing={8}>
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

            <Button type="submit" isLoading={props.isSubmitting}>
              <HStack spacing={4}>
                <Text>Log in</Text>
                <Icon as={IoEnterOutline} fontSize="2xl" />
              </HStack>
            </Button>
          </VStack>
        </Form>
      )}
    </Formik>

  );
};

export default LoginForm;

LoginForm.defaultProps = {
  isSubmitting: false,
};

LoginForm.propTypes = {
  isSubmitting: PropTypes.bool,
};
