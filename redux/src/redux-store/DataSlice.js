
import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
  },
  reducers: {
    createDataFunc: (state, action) => {
      state.data = [...state.data, action.payload];
    },
  },
});

export const { createDataFunc } = dataSlice.actions;

export default dataSlice.reducer;
