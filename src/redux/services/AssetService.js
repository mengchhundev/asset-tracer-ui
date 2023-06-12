import apiV2 from "./apiV2"

// export const getAllAssets = async (page = 1, size = 8, name = "", type = "", labelCode = "", serialCode = "", 
// status = "", owner = "", roomName = "", normalCategoryName = "", superCategoryName = "", sort = "") => {
//     return await apiV2.get(`/assets/track?page=${page}&size=${size}&name=${name}&type=${type}&labelCode=${labelCode}&serialCode=${serialCode}
//     &status=${status}&owner=${owner}&roomName=${roomName}&normalCategoryName=${normalCategoryName}&superCategoryName=${superCategoryName}&sort=${sort}`);
// }

export const getAllAssets = async () => {
    return await apiV2.get(`/assets/track`);
}

export const addAsset = async (data) => {
    const respone =  await apiV2.post(`/assets`, data);
    // console.log("after respone",respone)
}

const AssetService = { getAllAssets, addAsset}

export default AssetService;