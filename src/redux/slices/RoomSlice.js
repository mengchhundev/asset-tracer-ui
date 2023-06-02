import { createSlice } from '@reduxjs/toolkit';
const initialState ={
    data:[],
    dataId:[],
    roomDetail: {}
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
        }
    }
});
export const {setAllRoom,setRoomById, setRoomDetail} = roomSilce.actions
export default roomSilce.reducer