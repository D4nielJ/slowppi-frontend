/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import { Icon } from '@chakra-ui/react';
import { IoPlayOutline } from 'react-icons/io5';
import Button from './Button';

const NavigationButton = ({
  onClick, disabled, isReversed, ...props
}) => {
  const radiusProps = {
    borderLeftRadius: isReversed && 0,
    borderRightRadius: !isReversed && 0,
  };
  return (
    <Button
      type="button"
      onClick={onClick}
      disabled={disabled}
      py={8}
      {...radiusProps}
      {...props}
    >
      <Icon as={IoPlayOutline} fontSize="3xl" transform={isReversed && 'rotate(180deg)'} />
    </Button>
  );
};

NavigationButton.defaultProps = {
  onClick: () => {},
  disabled: false,
  isReversed: false,
};

NavigationButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  isReversed: PropTypes.bool,
};

export default NavigationButton;
