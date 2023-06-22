import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assets: [],
  asset: {},
  invoice : []
};

export const AssetSlice = createSlice({
  name: "Asset",
  initialState,
  reducers: {
    setAssets: (state, action) => {
      state.assets = action.payload;
    },
    setAsset: (state, action) => {
      state.asset = action.payload
    },
    setAllInvoice: (state, action) => {
      state.invoice = action.payload
    }
  },
});

export const { setAssets, setAsset, setAllInvoice } = AssetSlice.actions;
export default AssetSlice.reducer;
