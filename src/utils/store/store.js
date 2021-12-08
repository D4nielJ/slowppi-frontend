import { configureStore } from '@reduxjs/toolkit';
import { currentUserReducer, shiftsReducer } from '../reducers';

const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    shifts: shiftsReducer,
  },
});

export default store;
