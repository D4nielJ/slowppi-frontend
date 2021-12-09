import PropTypes from 'prop-types';
import { HStack, Box } from '@chakra-ui/react';
import Navbar from './Navbar';

const Layout = ({ children }) => (
  <HStack
    w="full"
    h="100vh"
    overflow="none"
    alignItems="stretch"
    spacing={0}
  >
    <Navbar />
    <Box as="section" flex="1 1 100%">
      {children}
    </Box>
  </HStack>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
