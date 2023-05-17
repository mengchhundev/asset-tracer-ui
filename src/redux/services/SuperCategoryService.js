import api from "./api"

const getAllSuperCategory = async (page, size = 10) => {
    return await api.get(`/super-categories/?page=${page}&size=${size}`)
}

const saveSuperCategory = async (data) => {
    return await api.post(`/super-categories`, data)
}

const SuperCategoryService = {
    getAllSuperCategory,
    saveSuperCategory
};
export default SuperCategoryService;