import { combineReducers } from "redux"
import Boardsdetails from "../reducer/BoardsReducer"
import UserReg from "../reducer/UserRegReducer";


export const rootReducer = combineReducers({
    user,
    bords
});
export default rootReducer