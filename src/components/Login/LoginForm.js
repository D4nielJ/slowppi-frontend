import {
  VStack,
  Text,
  Icon,
  HStack,
} from '@chakra-ui/react';
import { IoEnterOutline } from 'react-icons/io5';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Button } from '../shared';
import { TextInput } from '../shared/Forms';

const LoginForm = () => (
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
    onSubmit={({ email, password }, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify({ email, password }, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {(props) => (
      <Form>
        <VStack spacing={8}>
          <TextInput
            label="Email address"
            name="email"
            id="email"
            type="email"
            placeholder="Email address"
          />

          <TextInput
            label="Password"
            name="password"
            id="password"
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

export default LoginForm;

LoginForm.defaultProps = {
  isSubmitting: false,
};

LoginForm.propTypes = {
  isSubmitting: PropTypes.bool,
};

// import { useDispatch } from 'react-redux';
// import { loginUser, logoutUser } from '../utils/actions/currentUser.actions';
// import { useControlledComp, useRedirectLoggedIn } from '../utils/customHooks';

// const Login = () => {
//   useRedirectLoggedIn();
//   const dispatch = useDispatch();
//   const [email, handleEmail] = useControlledComp('');
//   const [password, handlePassword] = useControlledComp('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(loginUser(email, password));
//   };

//   const handleLogout = () => {
//     dispatch(logoutUser());
//   };

//   return (
//     <div>
//       <form action="" onSubmit={handleSubmit}>
//         <input type="email" onChange={handleEmail} value={email} />
//         <input type="password" onChange={handlePassword} value={password} />
//         <button type="submit">Log in</button>
//       </form>
//       <button type="button" onClick={handleLogout}>Log out</button>
//     </div>
//   );
// };

// export default Login;
