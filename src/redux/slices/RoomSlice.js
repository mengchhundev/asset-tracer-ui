import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    dataId: [],
    roomDetail: {},
    deleteRoom: {},
    updateroom:{},
    newUpdateData:{}
}
export const roomSilce = createSlice({
    name: "Room",
    initialState,
  
    reducers: {
        setAllRoom: (state, action) => {
            state.data = action.payload
        },
       
        setRoomById: (state, action) => {
            state.dataId = action.payload
        },
        setRoomDetail: (state, action) => {
            state.roomDetail = action.payload
        },
        // setRoomImage : (state,action) => {
        //     state.profileImage = action.payload
        // },

        setDeleteRoom: (state, action) => {
            console.log("Data : ", action.payload);
            state.deleteRoom = action.payload
        },
        setUpdateRoom: (state, action)=>{
            state.updateroom = action.payload
        },
        setNewUpdateData: (state, action)=>{
            state.newUpdateData = action.payload
        }
    }
});
export const { setAllRoom, setRoomById, setRoomDetail, setDeleteRoom ,setUpdateRoom} = roomSilce.actions
export default roomSilce.reducer