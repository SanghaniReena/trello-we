import axios from 'axios';
const baseUrl = "localhost:3000"
const BaseService = axios.create(
    {
        baseURL: baseUrl
    }
);

export default BaseService;