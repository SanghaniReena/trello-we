import BaseService from './baseService'


export function signup(data) {
    debugger
    return BaseService.post('/signup', data);
}
export function getUsers() {
    return BaseService.get('/signup');
}
export function login(data) {
    return BaseService.post('/login', data);
}
export function boards(data) {
  
    return BaseService.post('/boards', data);
}
export function boardsname(id) {
    
    return BaseService.get("/"+id+'/boards');
}
export function boardname(id) {
    return BaseService.get('/board/'+id);
}
export function teams(data) {
  
    return BaseService.post('/teams', data);
}
export function teamsname(id) {
    
    return BaseService.get(id+'/teams');
}