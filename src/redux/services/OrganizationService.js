import api from "./api"

const getAllOrganizations = async (userID) => {
    return api.get(`/organization-detail/${userID}`);
}

const OrganizationService = {
    getAllOrganizations
}

export default OrganizationService;