import apiV2 from "./apiV2"

const getAllOrganizations = async (userID,search = "",sort = "") => {
    return await apiV2.get(`/organizations/${userID}/organization?search=${search}&sort=${sort}`);
}

const joinOrganization = async (data) => {
    return await apiV2.post(`/organizations/join`, data)
}

const saveOrganization = async (data) => {
    return await apiV2.post(`/organizations`, data)
    
}

const updateOrganization = async (data, orgId) => {
    return await apiV2.put(`/organizations/${orgId}`, data)
}

const deleteOrganization = async (orgId) => {
    return await apiV2.delete(``)
}

const OrganizationService = {
    getAllOrganizations,
    joinOrganization,
    saveOrganization,
    updateOrganization
}

export default OrganizationService;