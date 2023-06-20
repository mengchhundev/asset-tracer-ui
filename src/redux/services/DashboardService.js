import apiV2 from "./apiV2";



const getTotalUserInOrg = async (orgId) => {
    return await apiV2.get(`/dashboard/${orgId}/count-user-joined`);
}

const getTotalAssetInOrg = async (orgId) => {
    return await apiV2.get(`/dashboard/${orgId}/count-all-asset`)
}

const getTotalRoomInOrg = async (orgId) => {
    return await apiV2.get(`/dashboard/count-all-rooms/${orgId}`)
}
const getTotalInvoiceInOrg = async (orgId) => {
    return await apiV2.get(`/dashboard/${orgId}/get-all-invoice`)
}

const DashboardService = {
    getTotalUserInOrg,
    getTotalAssetInOrg,
    getTotalRoomInOrg,
    getTotalInvoiceInOrg
}

export default DashboardService;