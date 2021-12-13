/* eslint-disable react/jsx-props-no-spreading */
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Checkbox,
} from '@chakra-ui/react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

const CheckboxInput = (props) => {
  const {
    id,
    name,
    label,
    type,
    description,
  } = props;

  const [field, meta] = useField(props);

  return (
    <FormControl isInvalid={meta.touched && meta.error}>
      <FormLabel srOnly htmlFor={name}>{label}</FormLabel>
      <Checkbox id={name} {...field} name={name} type={type} value={id.toString()}>
        {description}
      </Checkbox>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
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
