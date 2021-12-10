import {
  Flex, Image, Heading, VStack, AspectRatio, Text,
} from '@chakra-ui/react';
import Layout from '../components/Layout/Layout';
import { Button } from '../components/shared';

const NoMatch = () => (
  <Layout>
    <VStack spacing={0} h="100vh" justify="center" position="relative" backgroundColor="green.300">
      <VStack spacing={0} justify="center" position="absolute" w="full" h="full">
        <AspectRatio w="60%" ratio={16 / 9}>
          <Image
            src="./assets/images/404.jpg"
            alt="Under construction"
            position="absolute"
            w="full"
            h="full"
            objectFit="cover"
            filter="opacity(0.7) sepia(0.5)"
          />
        </AspectRatio>
      </VStack>
      <Flex direction="column" alignItems="center">
        <Heading
          position="relative"
          fontSize="7xl"
          letterSpacing="2.5rem"
          color="white"
          textAlign="center"
          mb={6}
        >
          404
        </Heading>
        <Text
          position="relative"
          fontSize="lg"
          color="white"
          textAlign="center"
          rounded="full"
          bg="green.300"
          py={2}
          px={8}
          mb={2}
        >
          This pages does not exist
        </Text>
        <Button as="a" href="/restaurants" fontSize="sm" py={2}>Go back</Button>
      </Flex>
    </VStack>
  </Layout>
);

export default NoMatch;
