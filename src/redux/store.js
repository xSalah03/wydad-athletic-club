import { configureStore } from '@reduxjs/toolkit';
import wacReducer from './slices/wacSlice';
const store = configureStore({
  reducer: {
    wac: wacReducer,
  },
});

export default store;