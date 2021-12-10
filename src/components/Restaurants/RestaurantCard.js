/* eslint-disable react/jsx-props-no-spreading */
import { useMemo } from 'react';
import {
  Text, HStack, VStack, Box, Image, AspectRatio,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { IoLogoFacebook, IoLogoTwitter } from 'react-icons/io5';
import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import IconCard from './IconCard';

const MotionVStack = motion(VStack);
const MotionBox = motion(Box);

const calcRandomPos = () => {
  const x = Math.floor(Math.random() * 2);
  const y = Math.floor(Math.random() * 2);
  return {
    left: x === 0 ? 'auto' : -6,
    right: x === 0 ? -6 : 'auto',
    top: y === 0 ? 'auto' : -6,
    bottom: y === 0 ? -6 : 'auto',
  };
};

const RestCard = ({
  rest: {
    id, name, image, description,
  },
}) => {
  const randomPosition = useMemo(() => calcRandomPos(), []);

  return (
    <MotionVStack
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1, zIndex: 1 }}
      exit={{ x: -300, opacity: 0, zIndex: 0 }}
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
      spacing={12}
      px={8}
      rounded={16}
      borderColor="gray.200"
    >
      <Box position="relative">
        <MotionBox
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ opacity: { duration: 0.4 } }}
          bgColor="green.300"
          position="absolute"
          w={32}
          h={32}
          rounded={16}
          {...randomPosition}
        />
        <Link to={`/restaurants/${id}`}>
          <AspectRatio w={52} ratio={1}>
            <Image src={image} alt={description} w="full" h="full" objectFit="cover" rounded={16} />
          </AspectRatio>
        </Link>
      </Box>
      <VStack spacing={5}>
        <Link to={`/restaurants/${id}`}>
          <Text
            as="h3"
            fontWeight="black"
            color="green.400"
            fontSize="lg"
            textTransform="uppercase"
            letterSpacing={1}
            _hover={{ textDecor: 'underline', color: 'green.500' }}
          >
            {name}
          </Text>
        </Link>
        <Box opacity="60%" borderBottom="4px" w="full" borderStyle="dotted" />
        <Text color="gray.400" fontWeight="500">{description}</Text>
        <HStack spacing={5}>
          <IconCard href="https://www.facebook.com/" as={IoLogoFacebook} />
          <IconCard href="https://twitter.com/" as={IoLogoTwitter} />
          <IconCard href="https://instagram.com/" as={AiFillInstagram} />
        </HStack>
      </VStack>
    </MotionVStack>
  );
};

const restShape = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string.isRequired, // A default image would be good here.
};

RestCard.propTypes = {
  rest: PropTypes.objectOf(PropTypes.shape(restShape)).isRequired,
};

export default RestCard;
