import { Routes, Route } from 'react-router-dom';
import { VStack } from '@chakra-ui/react';

import {
  Admin,
  Construction,
  Home,
  Login,
  RestaurantDetails,
  Restaurants,
  Signup,
  NoMatch,
  CreateRestaurant,
  ReservationsCreate,
  DeletePage,
  Reservations,
} from './pages';

import '@fontsource/righteous';
import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/500.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/open-sans/800.css';

function App() {
  return (
    <VStack w="100%" alignItems="stretch">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/restaurants/:id" element={<RestaurantDetails />} />
        <Route path="/restaurants/:id/reserve" element={<ReservationsCreate />} />
        <Route path="/restaurants/create" element={<CreateRestaurant />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/create-restaurant" element={<CreateRestaurant />} />
        <Route path="/admin/delete-restaurant" element={<DeletePage />} />
        <Route path="/blog" element={<Construction />} />
        <Route path="/*" element={<NoMatch />} />
      </Routes>
    </VStack>
  );
}

export default App;
