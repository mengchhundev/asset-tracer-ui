import apiV2 from "./apiV2";
const token = localStorage.getItem("token")
const getAllRoom = async () => {
   return await apiV2.get(`/rooms`)
}
const getRoomById = async (id) => {
   return await api.get(`/rooms/${id}`)
}
const addRoom = async (data) => {
   return await apiV2.post(`/rooms`,data)
}
const RoomService = { getAllRoom, getRoomById, addRoom };
export default RoomService;