import { Routes, Route } from 'react-router-dom';
import { VStack } from '@chakra-ui/react';
import {
  Admin,
  Home, Login, RestaurantDetails, Restaurants, Signup,
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
        <Route path="/restaurant/:id" element={<RestaurantDetails />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </VStack>
  );
}

export default App;
