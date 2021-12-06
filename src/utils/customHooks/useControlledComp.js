import { useState } from 'react';

const useControlledComp = (initial) => {
  const [value, setValue] = useState(initial);

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  return [value, handleValue, setValue];
};

export default useControlledComp;
