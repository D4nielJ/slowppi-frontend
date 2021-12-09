import {
  Text, HStack, VStack, Box, Image, AspectRatio, Icon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5';

const MotionVStack = motion(VStack);

const RestCard = ({
  rest: {
    id, name, image, description,
  },
}) => (
  <MotionVStack
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -300, opacity: 0 }}
    transition={{ type: 'spring', duration: 0.4 }}
    spacing={4}
  >
    <AspectRatio w={52} ratio={1}>
      <Image src={image} alt={description} w="full" h="full" objectFit="cover" />
    </AspectRatio>
    <Box textAlign="center">
      <Text as="h3" mb={6} fontWeight="black" fontSize="lg" textTransform="uppercase" letterSpacing={1}>{name}</Text>
      <Text color="gray.400" fontWeight="500">{description}</Text>
    </Box>
    <HStack spacing={5} color="gray.400">
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <Icon
          as={IoLogoFacebook}
          w={7}
          h={7}
          p={1}
          borderWidth={2}
          borderColor="gray.400"
          rounded="full"
          _hover={{ color: 'gray.500', borderColor: 'gray.500' }}
        />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <Icon
          as={IoLogoTwitter}
          w={7}
          h={7}
          p={1}
          borderWidth={2}
          borderColor="gray.400"
          rounded="full"
          _hover={{ color: 'gray.500', borderColor: 'gray.500' }}
        />
      </a>
      <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
        <Icon
          as={IoLogoInstagram}
          w={7}
          h={7}
          p={1}
          borderWidth={2}
          borderColor="gray.400"
          rounded="full"
          _hover={{ color: 'gray.500', borderColor: 'gray.500' }}
        />
      </a>
    </HStack>
  </MotionVStack>
);
export default RestCard;
