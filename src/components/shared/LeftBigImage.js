import { Box, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavigationButton from './NavigationButton';

const LeftBigImage = ({ src }) => {
  const navigate = useNavigate();

  return (
    <>
      <Box h="100vh" flex="1 1 65%">
        <Image src={src} alt="" objectFit="cover" h="full" w="full" />
      </Box>
      <NavigationButton position="absolute" bottom={40} onClick={() => { navigate(-1); }} isReversed />
    </>
  );
};

LeftBigImage.propTypes = {
  src: PropTypes.string.isRequired,
};

export default LeftBigImage;
