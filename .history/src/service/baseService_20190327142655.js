import axios from 'axios';


const baseUrl = "http://localhost:3000"
const BaseService = axios.create(
    {
        baseURL: baseUrl
    }
);

export default BaseService;