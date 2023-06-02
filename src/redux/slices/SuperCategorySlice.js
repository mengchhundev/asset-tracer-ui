import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: [],
    dataByIdd:[],
}

export const superCategorySlice = createSlice({
    name: "SuperCategory",
    initialState,
    reducers: {
        setAllSuperCategory: (state, action) => {
            state.dataByIdd = action.payload;
        },
    }
});

export const {setAllSuperCategory} = superCategorySlice.actions
export default superCategorySlice.reducer