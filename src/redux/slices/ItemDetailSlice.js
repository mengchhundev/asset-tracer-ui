import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataId: [],
};

export const itemDetailSlice = createSlice({
  name: "Item",
  initialState,
  reducers: {
    setDataId: (state, action) => {
      state.dataId = action.payload;
    },
  }
});

export const { setDataId } = itemDetailSlice.actions;
export default itemDetailSlice.reducer;
