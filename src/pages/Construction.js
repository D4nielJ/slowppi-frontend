import {
  Image, Heading, VStack, AspectRatio,
} from '@chakra-ui/react';
import Layout from '../components/Layout/Layout';

const Construction = () => (
  <Layout>
    <VStack spacing={0} h="100vh" justify="center" position="relative" backgroundColor="yellow.300">
      <VStack spacing={0} justify="center" position="absolute" w="full" h="full">
        <AspectRatio w="60%" ratio={16 / 9}>
          <Image
            src="./assets/images/construction.jpg"
            alt="Under construction"
            position="absolute"
            w="full"
            h="full"
            objectFit="cover"
            filter="opacity(0.7) sepia(0.5)"
          />
        </AspectRatio>
      </VStack>
      <Heading
        position="relative"
        fontSize="5xl"
        letterSpacing="2.5rem"
        color="white"
        textAlign="center"
      >
        UNDER CONSTRUCTION
      </Heading>
    </VStack>
  </Layout>
);

export default Construction;
