import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
}
export const normalCategorySlice = createSlice({
    name: "normalCategory",
    initialState,
  
    reducers: {
        setAllCategory: (state, action) => {
            state.data = action.payload
        }
    }
});
export const {setAllCategory, setCategoryName} = normalCategorySlice.actions
export default normalCategorySlice.reducer