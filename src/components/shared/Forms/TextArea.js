/* eslint-disable react/jsx-props-no-spreading */
import { useField } from 'formik';
import { FormControl, FormLabel, FormErrorMessage, Textarea } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const TextArea = (props) => {
  const {
    label,
    name,
    type,
    placeholder,
  } = props;

  const [field, meta] = useField(props);
  return (
    <FormControl isInvalid={meta.touched && meta.error}>
      <FormLabel srOnly htmlFor={name}>{label}</FormLabel>
      <Textarea id={name} type={type} placeholder={placeholder} {...field} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default TextArea;
