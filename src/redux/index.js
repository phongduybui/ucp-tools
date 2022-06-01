import { configureStore } from '@reduxjs/toolkit';
import ucpReducer from './ucpSlice';

export const store = configureStore({
  reducer: {
    ucp: ucpReducer,
  },
});
