import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
};

export const ucpSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setData: (state, { payload }) => {
      state.data = {
        ...state.data,
        ...payload,
      };
    },
  },
});

export const { setData } = ucpSlice.actions;

export default ucpSlice.reducer;
