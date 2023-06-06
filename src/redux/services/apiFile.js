import axios from "axios";

const apiFile = axios.create({
    baseURL: "http://localhost:8080/api/v1",
    headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${localStorage.getItem("token")}`
    },
    responseType: 'blob',

})

export default apiFile;