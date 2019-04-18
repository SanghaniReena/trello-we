import BaseService from './baseService';

export function signup(data) {

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
    return BaseService.get("/" + id + '/boards');
}
export function boardname(id) {
    return BaseService.get('/board/' + id);
}
export function teams(data) {
    return BaseService.post('/teams', data);
}
export function teamsname(id) {
    return BaseService.get(id + '/teams');
}

export function tboardname(iduser, idteams) {
    return BaseService.get('/' + iduser + '/teamboard/' + idteams);
}

export function teamboards(data) {
    return BaseService.post('/teamboards', data);
}
export function teamboardsname(id) {
    return BaseService.get("/" + id + '/teamboards');
}
export function lists(data) {
    return BaseService.post('/lists', data);
}
export function listname(id) {
    debugger
    return BaseService.get("/" + id + '/lists');
}
export function cards(data) {
    return BaseService.post('/cards', data);
}
export function cardsname(id) {
    return BaseService.get("/" + id + '/cards');
}