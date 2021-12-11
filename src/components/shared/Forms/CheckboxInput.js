import { HStack, Checkbox, CheckboxGroup } from '@chakra-ui/react';

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

export default CheckboxInput;
