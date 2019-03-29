import BaseService from './baseService'


// export function login(data) {
//     return BaseService.post('/login', data);
// }

export function signup(data) {
    return BaseService.post('/signup', data);
}
export function signup() {
    return BaseService.get('/signup');
}
export function login(data) {
    return BaseService.post('/login', data);
}
export function boards(data) {
    debugger
    return BaseService.post('/boards', data);
}
export function boardsname() {
    return BaseService.get('/boards');
}