import {FAILED, FETCH_USERS, LOGOUT, USER_LOGIN, USER_REG} from "../action/UserRegAction"


const INITIAL_STATE = {
    users: [],
    auth: false
}
const handleReg = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_REG:
            {
                const newUser = state.users.concat(action.data);
                return Object.assign({}, state, {
                    users: newUser
                });
            }
        case USER_LOGIN:
            {
                if (action.data.status === true) {
                    return Object.assign({}, state, {
                        auth: true,
                    });
                } else {
                    return Object.assign({}, state, {
                        auth: false
                    })
                }
            }
            case LOGOUT: 
            debugger
            {
                return Object.assign({}, state, { name:"" ,email:"",pw:""});
            }
        case FETCH_USERS:
            {
                return Object.assign({}, state, {
                    users: action.data
                })
            }
        case FAILED:
            {
                return Object.assign({}, state, {
                    error_msg: action.data.error_msg
                });
            }
        default:
            return state;
    }
}
export default handleReg