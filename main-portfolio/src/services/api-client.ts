import axios, { AxiosRequestConfig, CanceledError } from "axios";

export interface FetchResponse<T>{
    count: number;
    next: string | null;
    results: T[];
}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    // headers: {}
    params: {
        key: 'ecb5ff5899824e149bf90ce0498fc877'
    }
})

class APIClient<T> {

    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
        .then(response => response.data)
    }
}

export default APIClient;