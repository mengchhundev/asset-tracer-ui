import api from "./api"

const getAllAssets = async (userID) => {
    return api.get(`/organizations/${userID}/organization`);
}

const AssetService = {

}

export default AssetService;