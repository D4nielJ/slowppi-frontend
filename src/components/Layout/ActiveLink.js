/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import { hasSomeRole } from '../../utils/helpers';

const ActiveLink = ({
  roles, to = '/', children, ...props
}) => {
  const { pathname: path } = useLocation();
  const { user } = useSelector((state) => state.currentUser);

  if (!hasSomeRole(user, roles)) {
    return null;
  }

  let activeLinkProps = {};
  if (path.includes(to)) {
    activeLinkProps = {
      bg: 'green.300',
      color: 'white',
    };
  }

  return (
    <RouterLink to={to}>
      <ChakraLink
        as="div"
        textTransform="uppercase"
        fontWeight="black"
        color="gray.700"
        fontSize="xl"
        py={3}
        pl={4}
        pr={10}
        w="full"
        {...props}
        {...activeLinkProps}
      >
        {children}
      </ChakraLink>
    </RouterLink>
  );
};

export default ActiveLink;

ActiveLink.defaultProps = {
  roles: ['', 'admin'],
  to: '/',
};

ActiveLink.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string),
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
};
