import apiV2 from "./apiV2";



const getTotalUserInOrg = async (orgId) => {
    return await apiV2.get(`/organizations/get-all-joined-users/${orgId}`);
}

const getTotalAssetInOrg = async (orgId) => {
    return await apiV2.get(`/item-details/by-organization/${orgId}`)
}

const getTotalRoomInOrg = async (orgId) => {
    return await apiV2.get(`/rooms/${orgId}/get-all`)
}
const getTotalInvoice = async (orgId) => {
    return await apiV2.get(``)
}
const DashboardService = {
    getTotalUserInOrg,
    getTotalAssetInOrg,
    getTotalRoomInOrg
}

export default DashboardService;