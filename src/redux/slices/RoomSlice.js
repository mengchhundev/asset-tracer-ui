import { createSlice } from '@reduxjs/toolkit';
const initialState ={
    data:[],
    dataId:[],
    roomDetail: {},
    deleteRoom:{}
}
export const roomSilce = createSlice ({
    name: "Room",
    initialState,
    reducers:{
        setAllRoom: (state, action)=>{
            state.data = action.payload
            // state.data =  [
            //     {
            //       "id": "7742220b-b05c-4677-a34a-59e58e1423e8",
            //       "name": "Sr class",
            //       "type": "Class",
            //       "floor": "Gf",
            //       "description": "ADWQDEWD",
            //       "image": null,
            //       "organization": null
            //     }, {
            //         "id": "7742220b-b05c-4677-a34a-59e58e1423e8",
            //         "name": "Sr class",
            //         "type": "Class",
            //         "floor": "Gf",
            //         "description": "ADWQDEWD",
            //         "image": null,
            //         "organization": null
            //       }, {
            //         "id": "7742220b-b05c-4677-a34a-59e58e1423e8",
            //         "name": "Sr class",
            //         "type": "Class",
            //         "floor": "Gf",
            //         "description": "ADWQDEWD",
            //         "image": null,
            //         "organization": null
            //       },
               
            //   ]
        },
        setRoomById:(state,action)=>{
            state.dataId = action.payload
        },
        setRoomDetail: (state, action) => {
            state.roomDetail = action.payload
        },
        // setRoomImage : (state,action) => {
        //     state.profileImage = action.payload
        // },
        setDeleteRoom:(state,action)=>{
            state.deleteRoom = action.payload
            // console.log(action.payload);
        }
    }
});
export const {setAllRoom,setRoomById, setRoomDetail,setDeleteRoom} = roomSilce.actions
export default roomSilce.reducer