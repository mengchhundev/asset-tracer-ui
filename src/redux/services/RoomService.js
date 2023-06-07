import apiV2 from "./apiV2";
const getAllRoom = async (orgId) => {
   console.log(orgId);
   return await apiV2.get(`/rooms/organization/${orgId}`)
}
const getRoomById = async (id) => {
   return await api.get(`/rooms/${id}`)
}
const addRoom = async (data) => {
   return await apiV2.post(`/rooms`,data)
}
const deleteRoom = async (roomId)=>{
   console.log("roomId",roomId);
   return await apiV2.delete(`rooms/${roomId}`)
}
const RoomService = { getAllRoom, getRoomById, addRoom ,deleteRoom};
export default RoomService;