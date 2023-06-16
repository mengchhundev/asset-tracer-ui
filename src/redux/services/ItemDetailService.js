import apiV2 from "./apiV2";

const getAllItems = async (orgId, page = 1, size = 8, name = "", normalCategoryName = "", superCategoryName = "") => {
  return await apiV2.get(`/item-details/by-organization/${orgId}?page=${page}&size=${size}&name=${name}&normalCategoryName=${normalCategoryName}&superCategoryName=${superCategoryName}`);
};

const getItemById = async (id) => {
  return await apiV2.get(`/item-details/${id}`)
}

const getAllItemByOrg = async (orgId) => {
  return await apiV2.get(`/item-details/get-all/${orgId}`)
}

const ItemDetailService = { getAllItems, getItemById, getAllItemByOrg };

export default ItemDetailService;
