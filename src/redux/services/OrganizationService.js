import api from "./api"

const getAllOrganizations = async (userID) => {
    return api.get(`/organizations/${userID}/organization`);
}

const joinOrganization = async (data, token) => {
    return api.post(`/organizations/join`, data, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

const saveOrganization = (data, token) => {
    return api.post(`/organizations`, data, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

const OrganizationService = {
    getAllOrganizations,
    joinOrganization,
    saveOrganization
}

export default OrganizationService;