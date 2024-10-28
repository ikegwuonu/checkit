// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import tableReducer from './slices/slice';

const store = configureStore({
  reducer: {
    table: tableReducer, // replace 'yourFeature' with the feature name
  },
});

export default store;
