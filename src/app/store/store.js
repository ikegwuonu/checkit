// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import table from './slices/slice';

const store = configureStore({
  reducer: {
    table: table.reducer, 
  },
});

export default store;
