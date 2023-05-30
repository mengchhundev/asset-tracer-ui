import api from "./api"

const signin = async (data) => {
    return await api.post(`/users/login`, data)
}

const singup = async (data) => {
    return await api.post(`/users/register`, data)
}

const changeUserPassword = async (userId, data) => {
    return await api.put(`/users/change-password/${userId}`, data)
}

const updateProfile = async (userId, data) => {
    return await api.put(`/users/${userId}/user`, data)
}

const forgotPassword = async (email) => {
    return await api.get(`/users/forgot-password?userEmail=${email}`)
}

const checkValidCode = async (id, code) => {
    return await api.get(`/users/reset-password?id=${id}&code=${code}`)
}

const setNewPassword = async (id, code, data) => {
    return await api.post(`/users/set-password/${id}/${code}`, data)
}

const verifyRegistration = async (code) => {
    return await api.get(`/users/register/verify?code=${code}`)
}

const getProfileUser = async (userId) => {
    return await api.get(`users/${userId}`)
}

const UserService = {
    signin,
    singup,
    changeUserPassword,
    updateProfile,
    forgotPassword,
    checkValidCode,
    setNewPassword,
    verifyRegistration,
    getProfileUser
}

export default UserService;