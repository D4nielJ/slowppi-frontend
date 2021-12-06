import { useField } from 'formik';
import {
  FormControl, FormLabel, Input, FormErrorMessage,
} from '@chakra-ui/react';

const TextInput = ({
  label, ...props
}) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <FormControl isInvalid={meta.touched && meta.error}>
      <FormLabel srOnly htmlFor={props.name}>{label}</FormLabel>
      <Input id={props.id} minW={96} size="lg" {...field} {...props} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default TextInput;
