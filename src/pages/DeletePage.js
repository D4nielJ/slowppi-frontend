import { useSelector } from 'react-redux';
import { useState } from 'react';
import { HStack, VStack, Text } from '@chakra-ui/react';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';
import Layout from '../components/Layout/Layout';
import { useAuth } from '../utils/customHooks';
import DeleteList from '../components/Admin/DeleteList';
import { Button } from '../components/shared';

const DeletePage = () => {
  useAuth('/restaurants', ['admin']);
  const { restaurantslist } = useSelector((state) => state.restaurants);
  const itemLimit = 12;
  const [curPage, setCurPage] = useState(0);

  const handleNextPage = () => {
    setCurPage(curPage + 1);
  };

  const handlePreviousPage = () => {
    setCurPage(curPage - 1);
  };

  return (
    <Layout>
      <HStack w="full" h="full" justify="space-between">
        <Button
          onClick={handlePreviousPage}
          disabled={curPage === 0}
          borderLeftRadius={0}
          py={7}
        >
          <CgChevronLeft />
        </Button>
        <VStack>
          <Text>DELETE RESTAURANTS LIST</Text>
          <DeleteList curPage={curPage} itemLimit={itemLimit} />
        </VStack>
        <Button
          onClick={handleNextPage}
          disabled={curPage === Math.ceil(restaurantslist.length / itemLimit) - 1}
          borderRightRadius={0}
          py={7}
        >
          <CgChevronRight />
        </Button>
      </HStack>
    </Layout>
  );
};

export default DeletePage;
