import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    rooms: [],
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
        setDeleteRoom: (state, action) => {
            state.deleteRoom = action.payload
        },
        setUpdateRoom: (state, action)=>{
            state.updateroom = action.payload
        },
        setNewUpdateData: (state, action)=>{
            state.newUpdateData = action.payload
        },
        setRooms: (state, action) => {
            state.rooms = action.payload
        }
    }
});
export const { setAllRoom, setRoomById, setRoomDetail, setDeleteRoom ,setUpdateRoom, setRooms} = roomSilce.actions
export default roomSilce.reducer