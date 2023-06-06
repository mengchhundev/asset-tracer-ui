import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  asset: {
    id: "",
    name: "",
  },
};

export const assetSlice = createSlice({
  name: "Organization",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = assetSlice.actions;
export default assetSlice.reducer;
