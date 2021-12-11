/* eslint-disable react/jsx-props-no-spreading */
import { Textarea } from '@chakra-ui/react'

const TextArea = (props) => {
  const { label, name, type, placeholder } = props;
  console.log(label);
  return (
    
    <Textarea placeholder={placeholder} />
  );
};

export default TextArea;
