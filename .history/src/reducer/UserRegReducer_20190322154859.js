import { type } from "os";
import {USER_REG, FAILED} from "../action/UserRegAction"
const INITIAL_STATE={
    name:"",
    email:"",
    pw:"",
    users:[]
}
const handleReg=(state=INITIAL_STATE,action)=>{
    switch(type.action){
        case USER_REG:
        {
            const newUser=state.users.concat(action.data);
            return Object.assign({},state,{users:newUser});
        }
        case FAILED:
        {
            return Object.assign({}, state, { error_msg: action.data.error_msg });
        }
       default:
            return state;
    }
}
export default handleReg