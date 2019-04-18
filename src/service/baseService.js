import axios from 'axios';


const baseUrl = "http://192.168.0.106:3000/"
const BaseService = axios.create(
    {
        baseURL: baseUrl
    }
);

export default BaseService;