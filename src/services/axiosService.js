import axios from "axios";

const baseUrl = 'http://127.0.0.1:8000/'

const axiosService = {
    send: (endpoint, token, payload, method) => {
        const axiosInstance = axios.create({
            baseURL: baseUrl,
            headers: {
                token: token
            },
        });
        if (method === 'post') {
            return axiosInstance.post(baseUrl + endpoint, payload)
        }else if( method === 'get'){
            return axiosInstance.get(baseUrl + endpoint, payload)
        }
    }
}

export default axiosService