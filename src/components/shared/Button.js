/* eslint-disable react/jsx-props-no-spreading */
import { Button as ChakraButton } from '@chakra-ui/react';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
