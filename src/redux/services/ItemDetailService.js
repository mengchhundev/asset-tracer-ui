import apiV2 from "./apiV2";


export const getAllAssets = async (orgId, page = 1, size = 8, name = "", normalCategoryName = "", superCategoryName = "") => {
  return await apiV2.get(`/item-details/by-organization/${orgId}?page=${page}&size=${size}&name=${name}&normalCategoryName=${normalCategoryName}&superCategoryName=${superCategoryName}`);
};

const ItemDetailService = { getAllAssets };

export default ItemDetailService;
