import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: []
}

export const superCategorySlice = createSlice({
    name: "SuperCategory",
    initialState,
    reducers: {
        setAllSuperCategory: (state, action) => {
            state.data = action.payload;
        }
    }
});

export const {setAllSuperCategory} = superCategorySlice.actions
export default superCategorySlice.reducer