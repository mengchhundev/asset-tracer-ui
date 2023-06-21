import apiV2 from "./apiV2"

const getAllAssets = async (orgId, page = 1, size = 8, assetName = "", labelCode = "", serialCode = "", status = "", owner = "", room = "", normalCategoryName = "", sort = "") => {
    return await apiV2.get(`/assets/track/${orgId}?page=${page}&size=${size}&assetName=${assetName}&labelCode=${labelCode}&serialCode=${serialCode}&status=${status}&owner=${owner}&room=${room}&normalCategoryName=${normalCategoryName}&sort=${sort}`);
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