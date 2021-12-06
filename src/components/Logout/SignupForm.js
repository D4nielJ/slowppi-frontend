import {
  VStack, Text, FormControl,
  FormLabel,
  Input,
  Icon,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { IoEnterOutline } from 'react-icons/io5';
import { Button } from '../shared';

const SignupForm = () => (
  <VStack
    flexShrink={0}
    w="full"
    h="full"
    maxW="72%"
    pt={16}
    spacing={16}
  >
    <Text fontSize="3xl" fontWeight="Bold">Welcome!</Text>
    <form>
      <VStack spacing={8}>
        <FormControl id="email">
          <FormLabel srOnly>First name</FormLabel>
          <Input minW={96} size="lg" type="text" placeholder="First name" />
        </FormControl>
        <FormControl id="email">
          <FormLabel srOnly>Last name</FormLabel>
          <Input minW={96} size="lg" type="text" placeholder="Last name" />
        </FormControl>
        <FormControl id="email">
          <FormLabel srOnly>Email address</FormLabel>
          <Input minW={96} size="lg" type="email" placeholder="Email address" />
        </FormControl>
        <FormControl id="email">
          <FormLabel srOnly>Password</FormLabel>
          <Input minW={96} size="lg" type="password" placeholder="Password" />
        </FormControl>
        <FormControl id="email">
          <FormLabel srOnly>Password confirmation</FormLabel>
          <Input minW={96} size="lg" type="password" placeholder="Password confirmation" />
        </FormControl>
        <Button type="submit">
          <HStack spacing={4}>
            <Text>Sign up</Text>
            <Icon as={IoEnterOutline} fontSize="2xl" />
          </HStack>
        </Button>
      </VStack>
    </form>
    <HStack>
      <Text>
        Alredy registered?
      </Text>
      <Text color="green.500" textDecor="underline" _hover={{ color: 'gray.700' }}><Link to="/login">Log in here!</Link></Text>
    </HStack>
  </VStack>
);

export default SignupForm;

// validationSchema={Yup.object({
//   firstName: Yup.string()
//     .max(20, 'Must be 20 characters or less')
//     .required('Required'),
//   lastName: Yup.string()
//     .max(20, 'Must be 20 characters or less')
//     .required('Required'),
//   email: Yup.string()
//     .email('Invalid email address')
//     .required('Required'),
//   password: Yup.string()
//     .min(8, 'Password is too short (8 chars minimum).')
//     .matches(/"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"/,
//              'Password must have at least one number and one letter')
//     .required('Required'),
//   passwordConfirmation: Yup.string()
//     .oneOf([Yup.ref('password'), null], 'Passwords must match'),
// })}
