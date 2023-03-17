import { configureStore } from '@reduxjs/toolkit';
import heroSlice from '../features/heroSlice';
import marketSlice from '../features/marketSlice';

export const store = configureStore({
  reducer: {
    heroReducer: heroSlice,
    marketRReducer: marketSlice,
  },
})