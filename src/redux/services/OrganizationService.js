import apiV2 from "./apiV2"

const getAllOrganizations = async (userID) => {
    return await apiV2.get(`/organizations/${userID}/organization`);
}

const joinOrganization = async (data) => {
    return await apiV2.post(`/organizations/join`, data)
}

const saveOrganization = async (data) => {
    return await apiV2.post(`/organizations`, data)
    
}

const updateOrganization = async (data, orgId) => {
    return  await apiV2.put(`/organizations/${orgId}`, data)
}

const OrganizationService = {
    getAllOrganizations,
    joinOrganization,
    saveOrganization,
    updateOrganization
}

export default OrganizationService;