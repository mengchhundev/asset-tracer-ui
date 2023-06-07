import apiV2 from "./api"

const getAllAssets = async () => {
    return await apiV2.get(`/assets`);
}

const AssetService = { getAllAssets}

export default AssetService;