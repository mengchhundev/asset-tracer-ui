import apiV2 from "./apiV2";

const getAllItemDetail = async () => {
  return await apiV2.get(`/item-details/${id}`);
};

export default ItemDetailService;
