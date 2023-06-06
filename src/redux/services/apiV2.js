const apiV2 = axios.create({
    baseURL: "http://localhost:8080/api/v1",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
})

export default apiV2;