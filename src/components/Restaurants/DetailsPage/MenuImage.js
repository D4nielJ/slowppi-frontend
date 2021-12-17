import PropTypes from 'prop-types';
import {
  AspectRatio, Image, Box, Text,
} from '@chakra-ui/react';

const MenuImage = ({ src, name }) => (
  <AspectRatio w="100%" ratio={1}>
    <Box position="relative" role="group" rounded={8} _hover={{ cursor: 'pointer' }}>
      <Image
        src={src}
        alt={name}
        position="absolute"
        objectFit="cover"
        h="full"
        w="full"
        rounded={8}
        _groupHover={{ transform: 'scale(104%)' }}
        transition="ease-in-out"
        transitionProperty="all"
        transitionDuration="0.15s"
      />
      <Text
        position="absolute"
        textTransform="uppercase"
        color="white"
        fontWeight="bold"
        bg="linear-gradient(90deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), transparent)"
        left={0}
        bottom={4}
        pl={2}
        pr={4}
        py={1}
        noOfLines={1}
      >
        {name}
      </Text>
    </Box>
  </AspectRatio>
);

MenuImage.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default MenuImage;
