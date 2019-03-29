import {BOARD_ACTION} from "../action/BaordsAction"

INIAL_STATE={
    boards:[],
    bTitle:""
}
const handleBoards=(state=INITIAL_STATE,action)=>{
    switch(type.action){
        case USER_REG:
        {
            const newUser=state.users.concat(action.data);
            return Object.assign({},state,{users:newUser});
        }
        case USER_LOGIN:
        {
            return Object.assign({},state,{
                email:action.data.email,
                pw:action.data.pw
             });
        }
        case FAILED:
        {
            return Object.assign({}, state, { error_msg: action.data.error_msg });
        }
       default:
            return state;
    }
}
export default handleBoards