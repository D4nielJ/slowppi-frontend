/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import { Icon } from '@chakra-ui/react';
import { IoPlayOutline } from 'react-icons/io5';
import Button from './Button';

/*
* Make direction prop dependant
* Replace buttons on Restaurant page with this component
*/

const BackButton = ({ onClick, disabled, ...props }) => (
  <Button
    type="button"
    onClick={onClick}
    disabled={disabled}
    borderLeftRadius={0}
    py={7}
    {...props}
  >
    <Icon as={IoPlayOutline} fontSize="2xl" transform="rotate(180deg)" />
  </Button>
);

BackButton.defaultProps = {
  onClick: () => {},
  disabled: false,
};

BackButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default BackButton;
