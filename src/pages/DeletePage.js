/* eslint-disable consistent-return */
import { useSelector } from 'react-redux';
import { useState } from 'react';
import {
  HStack,
  VStack,
  Text,
  Input,
} from '@chakra-ui/react';
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

  const offset = curPage * itemLimit;
  const [filtered, setFiltered] = useState('');

  const handleNextPage = () => {
    setCurPage(curPage + 1);
  };

  const handlePreviousPage = () => {
    setCurPage(curPage - 1);
  };

  // eslint-disable-next-line array-callback-return
  const filteredArrayFull = restaurantslist.filter((val) => {
    if (filtered === '') {
      return val;
    }
    if (val.name.toLowerCase().includes(filtered.toLowerCase())) {
      return val;
    }
  });

  const filteredArray = filteredArrayFull.slice(offset, offset + itemLimit);

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
          <Input placeholder="search" onChange={(e) => { setFiltered(e.target.value); }} />
          <DeleteList curPage={curPage} itemLimit={itemLimit} filteredArray={filteredArray} />
        </VStack>
        <Button
          onClick={handleNextPage}
          disabled={curPage === Math.ceil(filteredArrayFull.length / itemLimit) - 1}
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
