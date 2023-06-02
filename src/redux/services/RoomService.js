import api from "./api";
 const getAllRoom = async () =>{
    return await api.get(`/rooms`)
 }
 const getRoomById = async (id) =>{
   return await api.get(`/rooms/${id}`)
}
const addRoom = async ()=>{
   return await api.post(`/rooms`)
}
 const RoomService = {getAllRoom,getRoomById};
 export default RoomService;