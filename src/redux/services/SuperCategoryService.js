import api from "./api"

const getAllSuperCategory = async (page, size = 10) => {
    return await api.get(`/super-categories/?page=${page}&size=${size}`)
}

const SuperCategoryService = {getAllSuperCategory};
export default SuperCategoryService;