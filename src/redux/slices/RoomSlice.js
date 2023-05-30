import { createSlice } from '@reduxjs/toolkit';
const initialState ={
    data:[]
}
export const roomSilce = createSlice ({
    name: "Room",
    initialState,
    reducers:{
        setAllRoom: (state, action)=>{
            state.data = action.payload;
        },
        // setRoomById:()
    }
});
export const {setAllRoom} = roomSilce.actions
export default roomSilce.reducer