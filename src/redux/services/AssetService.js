import apiV2 from "./apiV2"

export const getAllAssets = async (page = 1, size = 8, name = "", type = "", labelCode = "", serialCode = "", 
status = "", owner = "", roomName = "", normalCategoryName = "", superCategoryName = "", sort = "") => {
    return await apiV2.get(`/assets/track?page=${page}&size=${size}&name=${name}&labelCode=${labelCode}&serialCode=${serialCode}`);
}
export const deleteAsset = async (assetId, orgId) => {
    return await apiV2.delete(`/assets/${assetId}/${orgId}`)
}

export const addAsset = async (data) => {
    const respone =  await apiV2.post(`/assets`, data);
}



const AssetService = { getAllAssets, addAsset, deleteAsset}

export default AssetService;