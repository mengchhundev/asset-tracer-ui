import api from "./api"
import apiFile from "./apiFile"

const storeFile = async (file, token) => {
    return await api.post(`/files/file`, file, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`
        }
    })
}

const getFile = async (fileName) => {
    return await apiFile.get(`files/getFile?fileName=${fileName}`)
}

const FileUploadService = { storeFile, getFile }
export default FileUploadService