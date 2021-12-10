import {
  Text, HStack, VStack, Box, Image, AspectRatio, Icon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5';
import { AiFillInstagram } from 'react-icons/ai';
import IconCard from './IconCard';

const MotionVStack = motion(VStack);

const randomPosBg = () => {
  const pos = Math.floor(Math.random() * 2);
  return pos === 0 ? -8 : 8;
};

const RestCard = ({
  rest: {
    id, name, image, description,
  },
}) => (
  <MotionVStack
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1, zIndex: 1 }}
    exit={{ x: -300, opacity: 0, zIndex: 0 }}
    transition={{
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    }}
    spacing={8}
    p={8}
    rounded={16}
    borderColor="gray.200"
  >
    <Box position="relative">
      <Box
        bgColor="green.300"
        position="absolute"
        w={32}
        h={32}
        top={randomPosBg()}
        left={randomPosBg()}
        right={randomPosBg()}
        bottom={randomPosBg()}
        rounded={16}
      />
      <AspectRatio w={52} ratio={1}>
        <Image src={image} alt={description} w="full" h="full" objectFit="cover" rounded={16} />
      </AspectRatio>
    </Box>
    <VStack spacing={4}>
      <Text as="h3" fontWeight="black" fontSize="lg" textTransform="uppercase" letterSpacing={1}>{name}</Text>
      <Box opacity="60%" borderBottom="4px" w="full" borderStyle="dotted" />
      <Text color="gray.400" fontWeight="500">{description}</Text>
    </VStack>
    <HStack spacing={5}>
      <IconCard href="https://www.facebook.com/" as={IoLogoFacebook} />
      <IconCard href="https://twitter.com/" as={IoLogoTwitter} />
      <IconCard href="https://instagram.com/" as={AiFillInstagram} />
    </HStack>
  </MotionVStack>
);
export default RestCard;
