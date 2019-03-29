import BaseService from './baseService'

// export function login(data) {
//     return BaseService.post('/login', data);
// }

export function signUp(data) {
    return BaseService.post('/signup', data);
}