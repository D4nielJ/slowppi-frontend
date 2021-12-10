import { Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const IconCard = ({ href, as }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Icon
      as={as}
      w={8}
      h={8}
      p={1.5}
      borderWidth={2}
      color="gray.400"
      borderColor="gray.400"
      rounded="full"
      _hover={{ color: 'gray.500', borderColor: 'gray.500' }}
    />
  </a>
);

IconCard.propTypes = {
  href: PropTypes.string.isRequired,
  as: PropTypes.node.isRequired,
};

export default IconCard;
