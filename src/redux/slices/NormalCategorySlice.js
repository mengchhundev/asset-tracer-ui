import { createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";

const initialState = {
  data: [],
  deletNormalData: {},
  // updateNormalCategory: {}
};
export const normalCategorySlice = createSlice({
  name: "normalCategory",
  initialState,

  reducers: {
    setAllCategory: (state, action) => {
      state.data = action.payload;
    },
    postNormalCategory: (state, action) => {
      state.data.unshift(action.payload);
    },
    setUpdateNormalCategory: (state, action) => {
      const findIndex = state.data.findIndex(
        (normalCategory) => normalCategory.id === action.payload.id
      );
      state.data[findIndex] = action.payload;
    },
    setDeletNormalCategory: (state, action) => {
      state.data.filter((item) => item.id !== action.payload);
      // state.deletNormalData = action.payload;
      alert("Delete Successfully!");
    },
  },
});
export const {
  setAllCategory,
  setCategoryName,
  setUpdateNormalCategory,
  postNormalCategory,
  setDeletNormalCategory,
} = normalCategorySlice.actions;
export default normalCategorySlice.reducer;
