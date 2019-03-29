import BaseService from './baseService'


// export function login(data) {
//     return BaseService.post('/login', data);
// }

export function signup(data) {
    return BaseService.post('/signup', data);
}
export function getUsers() {
    return BaseService.get('/signup');
}
export function login(data) {
debugger
    return BaseService.post('/login', data);
}
export function boards(data) {
    return BaseService.post('/boards', data);
}
export function boardsname() {
    return BaseService.get('/boards');
}
export function boardInd() {
    return BaseService.get('/boards'+id);
}