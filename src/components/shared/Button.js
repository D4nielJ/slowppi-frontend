import { Button as ChakraButton } from '@chakra-ui/react';

const Button = ({ children, ...props }) => (
  <ChakraButton
    color="white"
    bg="green.300"
    rounded="full"
    fontSize="xl"
    p={6}
    _hover={{ bg: 'green.400' }}
    _active={{ bg: 'green.500' }}
    {...props}
  >
    {children}
  </ChakraButton>
);
export default Button;
