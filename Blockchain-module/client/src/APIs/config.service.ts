import axios, { Axios, AxiosRequestHeaders, Method } from 'axios'

export default new class ConfigService {
    axios = axios

    constructor() {
        this.axios.defaults.baseURL = 'http://localhost:8000/api'
    }

    getAPI(method: string, url: string, data: any|null = null, token: string | null = null) {
        return this.axios.request({
            method: method as Method,
            url: url,
            headers: (token && {Authorization: `Bearer ${token}`}) as AxiosRequestHeaders,
            data: data
        })
            .then(res => {
                return {
                    timeout: 1,
                    status: res.status,
                    data: res.data
                }
            })
            .catch(err => {
                return {
                    status: err.response.status,
                    message: 'Errors happened!',
                    err
                }
            })
    }
}