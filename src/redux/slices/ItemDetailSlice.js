import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const itemDetailSlice = createSlice({
  name: "Item",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  }
});

export const { setData } = itemDetailSlice.actions;
export default itemDetailSlice.reducer;
