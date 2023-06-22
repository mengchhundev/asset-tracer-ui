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
    return await apiV2.delete(`/organizations/${orgId}`)
}
const getOrganizationInvited = async () => {
    return await apiV2.get(`/organizations/get-all-invitation-from-organization/{orgId}`)
}

const OrganizationService = {
    getAllOrganizations,
    joinOrganization,
    saveOrganization,
    updateOrganization,
    deleteOrganization,
    getOrganizationInvited
}

export default OrganizationService;