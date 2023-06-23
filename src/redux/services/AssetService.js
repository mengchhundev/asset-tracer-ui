import apiV2 from "./apiV2"

const getAllAssets = async (orgId, page = 1, size = 8, assetName = "", status = "", room = "", normalCategoryName = "") => {
    return await apiV2.get(`/assets/track/${orgId}?page=${page}&size=${size}&assetName=${assetName}&status=${status}&room=${room}&normalCategoryName=${normalCategoryName}`);
}

const deleteAsset = async (itemId, orgId) => {
    return await apiV2.delete(`/item-details/${itemId}/${orgId}`)
}

const saveAsset = async (data) => {
    return await apiV2.post(`/item-details`, data)
}

const updateAsset = async (id, data) => {
    return await apiV2.put(`/item-details/${id}`, data)
}

const setAsset = async (data) => {
    return await apiV2.post(`/assets`, data);
}

const AssetService = { getAllAssets, setAsset, deleteAsset, saveAsset, updateAsset }

export default AssetService;