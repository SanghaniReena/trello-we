import axios from 'axios';
const baseUrl = "http://192.168.200.151:3001"
const BaseService = axios.create(
    {
        baseURL: baseUrl
    }
);

export default BaseService;