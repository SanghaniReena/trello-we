import { type } from "os";
import {USER_REG} from "../action/UserRegAction"
const INITIAL_STATE={
    name:"",
    email:"",
    pw:""
}
const handleReg=(state=INITIAL_STATE,action)=>{
    switch(type.action){
        case USER_REG:
        
    }
}