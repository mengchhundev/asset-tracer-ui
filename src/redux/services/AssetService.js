import apiV2 from "./apiV2"

export const getAllAssets = async () => {
    return await apiV2.get(`/assets`);
}

export const addAsset = async (data) => {
    console.log("Asset Data in service",data)
    const respone =  await apiV2.post(`/assets`, data);
    console.log("after respone",respone)
}

const AssetService = { getAllAssets, addAsset}

export default AssetService;