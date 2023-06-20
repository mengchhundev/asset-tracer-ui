import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assets: [],
};

export const AssetSlice = createSlice({
  name: "Asset",
  initialState,
  reducers: {
    setAssets: (state, action) => {
      state.assets = action.payload;
    }
  },
});

export const { setAssets } = AssetSlice.actions;
export default AssetSlice.reducer;
