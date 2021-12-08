import { configureStore } from '@reduxjs/toolkit';
import { categoriesReducer, currentUserReducer, shiftsReducer } from '../reducers';

const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    shifts: shiftsReducer,
    categories: categoriesReducer,
  },
});

export default store;
