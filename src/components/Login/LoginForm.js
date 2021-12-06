import {
  VStack, Text, FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Icon,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { IoEnterOutline, IoChevronForwardCircleOutline } from 'react-icons/io5';
import { Button } from '../shared';

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
    <form>
      <VStack spacing={8}>
        <FormControl id="email">
          <FormLabel srOnly>Email address</FormLabel>
          <Input minW={96} size="lg" type="email" placeholder="Email address" />
        </FormControl>
        <FormControl id="email">
          <FormLabel srOnly>Email address</FormLabel>
          <Input minW={96} size="lg" type="password" placeholder="Password" />
        </FormControl>
        <Button type="submit">
          <HStack spacing={4}>
            <Text>Log in</Text>
            <Icon as={IoEnterOutline} fontSize="2xl" />
          </HStack>
        </Button>
      </VStack>
    </form>
    <HStack>
      <Text>
        Haven&apos;t you registered yet?
      </Text>
      <Text color="green.500" textDecor="underline" _hover={{ color: 'gray.700' }}><Link to="/signup">Register here!</Link></Text>
    </HStack>
  </VStack>
);

export default LoginForm;
