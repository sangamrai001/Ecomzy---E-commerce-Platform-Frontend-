import { configureStore } from '@reduxjs/toolkit';
import NewSlices from './slices/NewSlices';

export const store = configureStore({
  reducer: {
    cart:NewSlices,
  },
});
 
