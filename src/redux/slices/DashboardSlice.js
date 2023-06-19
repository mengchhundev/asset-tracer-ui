import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   
    users: [],
    userDetail:{

    },
    items:[],
    itemsDetail: {
        totalData:""
    },
   
}

export const dashboardSlice = createSlice({
    name:"DashboardSlice",
    initialState,
    reducers:{
        setTotalItems:(state, action) => {
            state.items = action.payload;
        }
    }
})

export const {setTotalItems} = dashboardSlice.actions;
export default dashboardSlice.reducer;
