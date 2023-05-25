import api from "./api"

const changeUserPassword = async (userId, data) => {
    return await api.put(`/users/change-password/${userId}`, data)
}

const updateProfile = async (userId, data) => {
    return await api.put(`/users/${userId}/user`, data)
}

const forgotPassword = async (email) => {
    return await api.get(`/users/forgot-password?userEmail=${email}`)
}

const UserService = {
    changeUserPassword,
    updateProfile,
    forgotPassword
}

export default UserService;