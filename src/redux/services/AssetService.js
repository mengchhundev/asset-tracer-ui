import apiV2 from "./apiV2"

const getAllAssets = async (orgId, page = 1, size = 8, name = "", type = "", labelCode = "", serialCode = "", status = "", owner = "", room = "", normalCategoryName = "", superCategoryName = "", sort = "") => {
    return await apiV2.get(`/assets/track/${orgId}?page=${page}&size=${size}&name=${name}&type=${type}&labelCode=${labelCode}&serialCode=${serialCode}&status=${status}&owner=${owner}&room=${room}&normalCategoryName=${normalCategoryName}&superCategoryName=${superCategoryName}&sort=${sort}`);
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

const addAsset = async (data) => {
    return await apiV2.post(`/assets`, data);
}

const AssetService = { getAllAssets, addAsset, deleteAsset, saveAsset, updateAsset }

export default AssetService;