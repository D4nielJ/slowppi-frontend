import {
  VStack, HStack, Heading,
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
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
      backgroundColor="yellow.400"
      justifyContent="center"
      spacing={12}
    >
      <Heading fontSize="6xl" letterSpacing="2rem" color="white">SLOWPPI</Heading>
      <HStack spacing={8}>
        <Link to="/login">
          <Button>Log in</Button>
        </Link>
        <Link to="/signup">
          <Button>Sign up</Button>
        </Link>
      </HStack>

    </VStack>
  );
};

export default Home;
