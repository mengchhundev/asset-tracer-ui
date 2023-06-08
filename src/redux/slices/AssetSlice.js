import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  asset: { },
};

export const assetSlice = createSlice({
  name: "Asset",
  initialState,
  reducers: {
    setData: (state, action) => {
      console.log("Action : ", action.payload)
      state.data = action.payload;
      
    },
  },
});

export const { setData } = assetSlice.actions;
export default assetSlice.reducer;
