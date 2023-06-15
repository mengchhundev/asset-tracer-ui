import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemDetails: []
};

export const ItemDetailSlice = createSlice({
  name: "ItemDetail",
  initialState,
  reducers: {
    setItemDetails: (state, action) => {
      state.itemDetails = action.payload;
    },
  }
});

export const { setItemDetails } = ItemDetailSlice.actions;
export default ItemDetailSlice.reducer;
