import {
  AspectRatio, Image, Box, Text,
} from '@chakra-ui/react';

const MenuImage = ({ src, name }) => (
  <AspectRatio w="100%" ratio={1}>
    <Box position="relative">
      <Image src={src} alt={name} position="absolute" objectFit="cover" h="full" w="full" rounded={8} />
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

export default MenuImage;
