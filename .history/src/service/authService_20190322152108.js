import BaseService from './baseService'

export function login(credential) {
    return BaseService.post('/login', credential);
}

export function signUp(data) {
    return BaseService.post('/signup', data);
}