import { configureStore } from '@reduxjs/toolkit';
import {
  categoriesReducer,
  currentUserReducer,
  restaurantsReducer,
  shiftsReducer,
} from '../reducers';

const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    shifts: shiftsReducer,
    categories: categoriesReducer,
    restaurants: restaurantsReducer,
  },
});

export default store;
