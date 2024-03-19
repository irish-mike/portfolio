import axios, { CanceledError } from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    // headers: {}
    params: {
        key: 'ecb5ff5899824e149bf90ce0498fc877'
    }
})

export { CanceledError };