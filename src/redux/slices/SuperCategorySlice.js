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
        },
        setDeleteSuperCategory: (state, action) => {
            state.deleteSuperCategory = action.payload
        },
        setUpdateSuperCategory: (state, action) => {
            state.setUpdateSuperCategory = action.payload
        },
        
    }
});

export const { setAllSuperCategory, setSuperCategoryDetail, setDeleteSuperCategory,setUpdateSuperCategory } = superCategorySlice.actions
export default superCategorySlice.reducer