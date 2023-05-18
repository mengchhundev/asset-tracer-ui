import api from "./api"

const getAllSuperCategory = async (page, size = 10, name = "") => {
    return await api.get(`/super-categories/?page=${page}&size=${size}&name=${name}`)
}

const saveSuperCategory = async (data) => {
    return await api.post(`/super-categories`, data)
}

const deleteSuperCategory = async (id) => {
    return await api.delete(`/super-categories/${id}`)
}

const updateSuperCategory = async (id, data) => {
    return await api.put(`/super-categories/${id}`, data);
}

const SuperCategoryService = {
    getAllSuperCategory,
    saveSuperCategory,
    deleteSuperCategory,
    updateSuperCategory
};
export default SuperCategoryService;