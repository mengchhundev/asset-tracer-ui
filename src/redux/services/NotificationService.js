import apiV2 from "./apiV2"

// const getAllNotification = async (orgId, page = 1, size = 8, name = "", sort= "") => {
//     return await apiV2.get(`dashboard/${orgId}/get-all-notification-request?page=${page}&size=${size}&name=${name}&sort=${sort}`)
// }

const getAllNotification = async (orgId) => {
    const respone = await apiV2.get(`/dashboard/${orgId}/get-all-notification-request`)
    // console.log("After respone noti",respone); 
    return respone;
}

const NotificationService = {

    getAllNotification
}

export default NotificationService;