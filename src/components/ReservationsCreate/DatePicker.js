import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import addDays from 'date-fns/addDays';
import { IoCalendarOutline } from 'react-icons/io5';
import { Icon, AspectRatio, forwardRef } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { Button } from '../shared';

const ChakraInput = forwardRef(({ onClick }, ref) => (
  <AspectRatio minW={16} ratio={1}>
    <Button
      className="example-custom-input"
      onClick={onClick}
      ref={ref}
      bg="white"
      color="green.400"
      _hover={{ color: 'white', bg: 'green.400' }}
    >
      <Icon as={IoCalendarOutline} fontSize="4xl" />
    </Button>
  </AspectRatio>
));

ChakraInput.displayName = 'Calendar Input';

const DatePicker = ({ date, setDate }) => (
  <ReactDatePicker
    selected={date}
    onChange={(date) => setDate(date)}
    minDate={new Date()}
    maxDate={addDays(new Date(), 30)}
    popperPlacement="bottom-start"
    customInput={<ChakraInput />}
  />
);

DatePicker.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  setDate: PropTypes.func.isRequired,
};

ChakraInput.defaultProps = {
  onClick: () => {},
};

ChakraInput.propTypes = {
  onClick: PropTypes.func,
};

export default DatePicker;
