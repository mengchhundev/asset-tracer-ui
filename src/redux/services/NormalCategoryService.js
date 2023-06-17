import apiV2 from "./apiV2";

const getAllNormalCategory = async (orgId) => {
  return await apiV2.get(`/normal-categories/filter/${orgId}`);
};

export const addNormalCategory = async (data, superId, orgId) => {
  try {
    const newData = {
      ...data,
      superCategoryId: superId.id,
      organizationId: orgId,
    };
    const respone = await apiV2.post(`/normal-categories`, newData);
    return respone;
  } catch (e) {
    console.log("Normal Category Error", e);
  }
};

export const updateNormalCategory = async (normalId, data) => {
  try {
    const respone = await apiV2.put(`/normal-categories/${normalId}`, data);
    return respone;
  } catch (error) {
    console.log("Error", error);
  }
};

const getAllNormalCategoryName = async (orgId) => {
  return await apiV2.get(`/normal-categories/name/${orgId}`)
}

const NormalCategoryService = {
  getAllNormalCategory,
  addNormalCategory,
  updateNormalCategory,
  getAllNormalCategoryName
};
export default NormalCategoryService;
