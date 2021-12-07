import PropTypes from 'prop-types';
import { HStack } from '@chakra-ui/react';
import Navbar from './Navbar';

const Layout = ({ children }) => (
  <HStack>
    <Navbar />
    <section>
      {children}
    </section>
  </HStack>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
