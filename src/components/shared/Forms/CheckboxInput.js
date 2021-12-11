import { HStack, Checkbox, CheckboxGroup } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const CheckboxInput = (props) => {
  const { id, name } = props;
  return (
    <CheckboxGroup>
      <HStack>
        <Checkbox value={id.toString()}>{name}</Checkbox>
      </HStack>
    </CheckboxGroup>
  );
};

CheckboxInput.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default CheckboxInput;
