import apiV2 from "./apiV2"

export const getAllSuperCategory = async (page, size = 10, name = "") => {
    return await apiV2.get(`/super-categories/?page=${page}&size=${size}&name=${name}`)
}
const getAllSuperCategores = async () => {
    return await apiV2.get(`/super-categories/all`)
}

const getSuperCategories = async () => {
    return await apiV2.get(`/super-categories/7b1cd12b-4283-485b-8a33-c0870d246bee/filter?page=1&size=10`)
}

const saveSuperCategory = async (data) => {
    return await apiV2.post(`/super-categories`, data)
}

const deleteSuperCategory = async (id) => {
    return await apiV2.delete(`/super-categories/${id}`)
}

const updateSuperCategory = async (id, data) => {
    return await apiV2.put(`/super-categories/${id}`, data);
}


const SuperCategoryService = {
    getAllSuperCategores,
    saveSuperCategory,
    deleteSuperCategory,
    updateSuperCategory,
    getSuperCategories
};
export default SuperCategoryService;