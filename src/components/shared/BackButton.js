/* eslint-disable react/jsx-props-no-spreading */
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

export default BackButton;
