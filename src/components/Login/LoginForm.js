import {
  VStack, Text, FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Icon,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { IoEnterOutline } from 'react-icons/io5';
import {
  Formik, Form, useField, Field,
} from 'formik';
import * as Yup from 'yup';
import { Button } from '../shared';
import { TextInput } from '../shared/Forms';

const LoginForm = () => (
  <VStack
    flexShrink={0}
    w="full"
    h="full"
    maxW="72%"
    pt={16}
    spacing={16}
  >
    <Text fontSize="3xl" fontWeight="Bold">We&apos;re glad to see you!</Text>
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
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 2000);
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
      {/* <form>
        <VStack spacing={8}>

          <FormControl id="email">
            <FormLabel srOnly>Email address</FormLabel>
            <Input minW={96} size="lg" type="email" placeholder="Email address" />
          </FormControl>

          <FormControl id="password">
            <FormLabel srOnly>Password</FormLabel>
            <Input minW={96} size="lg" type="password" placeholder="Password" />
          </FormControl>

          <Button type="submit">
            <HStack spacing={4}>
              <Text>Log in</Text>
              <Icon as={IoEnterOutline} fontSize="2xl" />
            </HStack>
          </Button>

        </VStack>
      </form> */}
    </Formik>
    <HStack>
      <Text>
        Haven&apos;t you registered yet?
      </Text>
      <Text color="green.500" textDecor="underline" _hover={{ color: 'gray.700' }}><Link to="/signup">Register here!</Link></Text>
    </HStack>
  </VStack>
);

export default LoginForm;

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
