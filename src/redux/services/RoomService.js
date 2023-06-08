import apiV2 from "./apiV2";
const getAllRoom = async (orgId) => {
   return await apiV2.get(`/rooms/organization/${orgId}`)
}
const getRoomById = async (id) => {
   return await api.get(`/rooms/${id}`)
}
const addRoom = async (data) => {
   return await apiV2.post(`/rooms`,data)
}
const deleteRoom = async (roomId)=>{
   return await apiV2.delete(`rooms/${roomId}`)
}
const updateRoom = async (roomId,data) =>{
   console.log("bkvcjsdk",roomId);
   return await apiV2.put(`rooms/${roomId}`,data)
}
const RoomService = { getAllRoom, getRoomById, addRoom ,deleteRoom,updateRoom};
export default RoomService;