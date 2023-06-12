import apiV2 from "./apiV2";

export const getItemDetailById = async (id) => {
  return await apiV2.get(`/item-details/filter`);
};

const ItemDetailService = { getItemDetailById };

export default ItemDetailService;
