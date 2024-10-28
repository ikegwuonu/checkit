// store/slices/tableSlice.js
import { createSlice } from '@reduxjs/toolkit';

const table = createSlice({
  name: 'table',
  initialState: { value: null,status:true }, // initial state for table data
  reducers: {
    setData: (state, action) => {
      state.value = action.payload;
      state.status=true;
    },
  },
});

export const { setData } = table.actions;
export default table.reducer;
