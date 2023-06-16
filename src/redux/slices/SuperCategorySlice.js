import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: [],
    dataByIdd: [],
    superCategoryDetail : {
        name:"",
        icon:"",
    }
}

export const superCategorySlice = createSlice({
    name: "SuperCategory",
    initialState,
    reducers: {
        setAllSuperCategory: (state, action) => {
            state.data = action.payload
        },
        setSuperCategoryDetail: (state,action) =>{
            state.superCategoryDetail = action.payload
        }
    }
});

export const { setAllSuperCategory, setSuperCategoryDetail } = superCategorySlice.actions
export default superCategorySlice.reducer