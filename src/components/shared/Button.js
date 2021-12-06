import { Button as ChakraButton } from '@chakra-ui/react';

const Button = ({ children }) => (
  <ChakraButton
    color="white"
    bg="green.300"
    rounded="full"
    fontSize="xl"
    p={6}
    _hover={{ bg: 'green.400' }}
    _active={{ bg: 'green.500' }}
  >
    {children}
  </ChakraButton>
);
export default Button;
