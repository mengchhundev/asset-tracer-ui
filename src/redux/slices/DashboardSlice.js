import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data:[],
    items:[],
    rooms:[],
    invoices:[]
   
}

export const dashboardSlice = createSlice({
    name:"DashboardSlice",
    initialState,
    reducers:{
        setTotalUsers:(state, action ) => {
            state.data = action.payload
        },
        setTotalItems:(state, action) => {
            state.items = action.payload;
        },
        setTotalRooms:(state, action) => {
            state.rooms = action.payload
        },
        setTotalInvoices:(state, action) => {
            state.invoices = action.payload
        }
    }
})

export const {setTotalUsers, setTotalItems, setTotalRooms,setTotalInvoices} = dashboardSlice.actions;
export default dashboardSlice.reducer;
