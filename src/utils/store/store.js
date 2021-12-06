import { configureStore } from '@reduxjs/toolkit';
import { currentUserReducer } from '../reducers';

const store = configureStore({ reducer: { currentUser: currentUserReducer } });

export default store;
