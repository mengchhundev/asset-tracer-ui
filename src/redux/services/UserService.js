import api from "./api"

const changeUserPassword = async (userId, data) => {
    return await api.put(`/users/change-password/${userId}`, data)
}

const updateProfile = async (userId, data) => {
    return await api.put(`/users/${userId}/user`, data)
}

const UserService = {
    changeUserPassword,
    updateProfile
}

export default UserService;