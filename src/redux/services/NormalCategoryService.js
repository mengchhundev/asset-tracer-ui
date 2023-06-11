import apiV2 from "./apiV2"

const getAllNormalCategory = async () => {
    return await apiV2.get("/normal-categories/filter")
}

const getAllNormalCategoryName = async (orgId) => {
    return await apiV2.get(`/normal-categories/name/${orgId}`)
}

const NormalCategoryService = { getAllNormalCategory, getAllNormalCategoryName};
export default NormalCategoryService;