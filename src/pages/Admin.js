import { VStack } from '@chakra-ui/react';
import Layout from '../components/Layout/Layout';
import { Button } from '../components/shared';
import { useAuth } from '../utils/customHooks';

const Admin = () => {
  useAuth('/restaurants', ['admin']);

  return (
    <Layout>
      <VStack minH="100vh" justify="center" spacing={8}>
        <Button as="a" href="/admin/create-restaurant">Create Restaurant</Button>
        <Button as="a" href="/admin/delete-restaurant">Delete Restaurant</Button>
      </VStack>
    </Layout>
  );
};

export default Admin;
