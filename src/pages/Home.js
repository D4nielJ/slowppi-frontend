import {
  VStack, HStack, Heading, Icon, Text,
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoEnterOutline, IoChevronForwardCircleOutline } from 'react-icons/io5';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { logoutUser } from '../utils/actions/currentUser.actions';
import Button from '../components/Home/Button';

const Home = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.currentUser);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <VStack
      minH="100vh"
      backgroundColor="yellow.300"
      justifyContent="center"
      spacing={12}
    >
      <Heading fontSize="7xl" letterSpacing="2.5rem" color="white">SLOWPPI</Heading>
      <HStack spacing={8}>
        <Link to="/login">
          <Button>
            <HStack spacing={4}>
              <Icon as={IoEnterOutline} fontSize="2xl" />
              <Text>Log in</Text>
              <Icon as={IoChevronForwardCircleOutline} fontSize="2xl" />
            </HStack>
          </Button>
        </Link>
        <Link to="/signup">
          <Button>
            <HStack spacing={4}>
              <Icon as={AiOutlineUserAdd} fontSize="2xl" />
              <Text>Sign up</Text>
              <Icon as={IoChevronForwardCircleOutline} fontSize="2xl" />
            </HStack>
          </Button>
        </Link>
      </HStack>

    </VStack>
  );
};

export default Home;
