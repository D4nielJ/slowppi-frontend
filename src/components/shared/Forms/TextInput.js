import { useField } from 'formik';
import {
  FormControl, FormLabel, Input, FormErrorMessage,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

const TextInput = ({
  label, ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <FormControl isInvalid={meta.touched && meta.error}>
      <FormLabel srOnly htmlFor={props.name}>{label}</FormLabel>
      <Input id={props.id} minW={96} size="lg" {...field} {...props} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

TextInput.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TextInput;
