import api from "./api";
 const getAllRoom = async () =>{
    return await api.get(`/rooms`)
 }
 const getRoomById = async () =>{
   return await api.get(`/rooms/${id}`)
}
 const RoomService = {getAllRoom,getRoomById};
 export default RoomService;