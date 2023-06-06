import api from "./api"

const storeFile = async (file, token) => {
    return await api.post(`/files/file`, file, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`
        }
    })
}

const getFile = async (fileName, token) => {
    try {
        const repsone = await api.get(`files/getFile/{fileName}?fileName=${fileName}`, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
            },
            responseType: 'blob',
        })
    return repsone;
    } catch (e) {
        console.log("Error", e);
    }
}

const FileUploadService = { storeFile, getFile }
export default FileUploadService