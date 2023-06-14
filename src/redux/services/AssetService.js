import apiV2 from "./apiV2"

const getAllAssets = async (page = 1, size = 8, name = "", type = "", labelCode = "", serialCode = "", status = "", owner = "", roomName = "", normalCategoryName = "", superCategoryName = "", sort = "") => {
    return await apiV2.get(`/assets/track?page=${page}&size=${size}&name=${name}&labelCode=${labelCode}&serialCode=${serialCode}`);
}

const deleteAsset = async (assetId, orgId) => {
    return await apiV2.delete(`/assets/${assetId}/${orgId}`)
}

const addAsset = async (data) => {
    return await apiV2.post(`/assets`, data);
}

const saveAsset = async (data) => {
    return await apiV2.post(`/item-details`, data)
}

const AssetService = { getAllAssets, addAsset, deleteAsset, saveAsset}

export default AssetService;