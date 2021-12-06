import { Button as ChakraButton } from '@chakra-ui/react';

const Button = ({ children }) => (
  <ChakraButton color="white" bg="green.400" rounded="full" fontSize="xl" py={6}>
    {children}
  </ChakraButton>
);
export default Button;
