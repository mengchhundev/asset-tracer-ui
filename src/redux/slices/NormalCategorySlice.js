import { createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";

const initialState = {
  data: [],
  // updateNormalCategory: {}
};
export const normalCategorySlice = createSlice({
  name: "normalCategory",
  initialState,

  reducers: {
    setAllCategory: (state, action) => {
      state.data = action.payload;
    },

    setUpdateNormalCategory: (state, action) => {
      const findIndex = state.data.findIndex(
        (normalCategory) => normalCategory.id === action.payload.id
      );
      state.data[findIndex] = action.payload;
    },
    
    postNormalCategory: (state, action) => {
      state.data.unshift(action.payload)
    },
  },
});
export const { setAllCategory, setCategoryName, setUpdateNormalCategory,postNormalCategory} =
  normalCategorySlice.actions;
export default normalCategorySlice.reducer;
