import apiV2 from "./apiV2";

export const getItemDetail = async () => {
  return await apiV2.get(`/item-details/filter`);
};

const ItemDetailService = { getItemDetail };

export default ItemDetailService;
