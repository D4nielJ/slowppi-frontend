import {
  HStack,
  FormLabel,
  Checkbox,
  CheckboxGroup,
} from '@chakra-ui/react';
import { Field } from 'formik';
import PropTypes from 'prop-types';

const CheckboxInput = (props) => {
  const {
    id,
    name,
    label,
    type,
    description,
  } = props;

  return (
    <CheckboxGroup>
      <FormLabel srOnly htmlFor={name}>{label}</FormLabel>
      <HStack>
        <Checkbox>
          <Field type={type} name={name} value={id.toString()} />
          {description}
        </Checkbox>
      </HStack>
    </CheckboxGroup>
  );
};

CheckboxInput.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CheckboxInput;
