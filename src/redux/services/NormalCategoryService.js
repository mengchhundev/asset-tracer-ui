import apiV2 from "./apiV2"

const getAllNormalCategory = async ()=>{
    return await apiV2.get("/normal-categories/filter")
}

const NormalCategoryService = { getAllNormalCategory};
export default NormalCategoryService;