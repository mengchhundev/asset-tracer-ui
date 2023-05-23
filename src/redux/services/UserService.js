import api from "./api"

const updateUser = async (userId, data) => {
    return await api.put(`/users/change-password/${userId}`, data)
}

const UserService = {
    updateUser
}

export default UserService;