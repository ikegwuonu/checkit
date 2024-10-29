// store/slices/slice.js
import { createSlice, original } from '@reduxjs/toolkit';

const table = createSlice({
  name: 'table',
  initialState: { value: null,status:false }, // initial state for table data
  reducers: {
    setData: (state, action) => {
      state.value = action.payload;
      state.status=true;
    },
    edit:(state,action)=>{
        const newInfo=action.payload;
        const existingItem=state.value.find((item)=>item.capsule_serial===newInfo[0]);
        if(existingItem){
            existingItem.status=newInfo[1];
            existingItem.type=newInfo[2];
        };
        
    },
    add:(state,action)=>{
        const addInfo=action.payload;
        state.value.push({capsule_serial:addInfo[0],status:addInfo[1],type:addInfo[2],original_launch: Date()});
    },
    deleted:(state,action)=>{
      state.value=state.value.filter((item)=>item!=action.payload);
    },
  },
});

export const { setData,edit,add,deleted} = table.actions;
export default table;
