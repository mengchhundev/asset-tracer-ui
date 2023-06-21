import { createSlice } from "@reduxjs/toolkit";
import { normalCategorySlice } from "./NormalCategorySlice";
const initialState ={
    data :[]
}

export  const notificationSlice  = createSlice ({
    name : "notification",
    initialState,
    reducers :{
        setAllNotification:(state, action) => {
            state.data = action.payload;
        },
    }
})
export const {setAllNotification} = notificationSlice.actions
export default notificationSlice.reducer