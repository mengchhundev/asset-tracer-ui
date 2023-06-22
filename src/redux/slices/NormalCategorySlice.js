import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  normalCategories: []
};

export const normalCategorySlice = createSlice({
  name: "NormalCategory",
  initialState,
  reducers: {
    setNormalCategories: (state, action) => {
      state.normalCategories = action.payload;
    }
  },
});

export const {
  setNormalCategories
} = normalCategorySlice.actions;

export default normalCategorySlice.reducer;
