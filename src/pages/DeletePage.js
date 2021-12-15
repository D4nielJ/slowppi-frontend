/* eslint-disable consistent-return */
import { useSelector } from 'react-redux';
import { useState } from 'react';
import {
  HStack,
  Flex,
  Text,
  Input,
} from '@chakra-ui/react';
import Layout from '../components/Layout/Layout';
import { useAuth } from '../utils/customHooks';
import DeleteList from '../components/Admin/DeleteList';
import { NavigationButton } from '../components/shared';

const DeletePage = () => {
  useAuth('/restaurants', ['admin']);
  const { restaurantsList } = useSelector((state) => state.restaurants);
  const itemLimit = 10;
  const [curPage, setCurPage] = useState(0);

  const offset = curPage * itemLimit;
  const [filtered, setFiltered] = useState('');

  const handleNextPage = () => {
    setCurPage(curPage + 1);
  };

  const handlePreviousPage = () => {
    setCurPage(curPage - 1);
  };

  const resetCurPage = () => {
    setCurPage(0);
  };

  // eslint-disable-next-line array-callback-return
  const filteredArrayFull = restaurantsList.filter((val) => {
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
        <NavigationButton
          onClick={handlePreviousPage}
          disabled={curPage === 0}
          isReversed
        />
        <Flex h="full" direction="column" pt={20}>
          <Text
            mb={4}
            fontWeight="black"
            letterSpacing="wider"
            fontSize="2xl"
          >
            DELETE RESTAURANTS LIST
          </Text>
          <Input
            w="500px"
            mb={10}
            placeholder="search"
            onChange={(e) => { setFiltered(e.target.value); }}
          />
          <DeleteList resetCurPage={resetCurPage} filteredArray={filteredArray} />
        </Flex>
        <NavigationButton
          onClick={handleNextPage}
          disabled={curPage === Math.ceil(filteredArrayFull.length / itemLimit) - 1}
        />
      </HStack>
    </Layout>
  );
};

export default DeletePage;
