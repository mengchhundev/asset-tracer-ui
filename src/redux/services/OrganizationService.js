import api from "./api"

const getAllOrganizations = async (userID) => {
    return api.get(`/organizations/${userID}/organization`);
}

const OrganizationService = {
    getAllOrganizations
}

export default OrganizationService;