import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  assetAdd: [],
};

export const assetSlice = createSlice({
  name: "Asset",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setassetAdd: (state, action) => {
      state.item = action.payload
    }
  },
});

export const { setData,setassetAdd } = assetSlice.actions;
export default assetSlice.reducer;
