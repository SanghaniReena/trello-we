import { combineReducers } from "redux"
import UserReg from "../reducer/UserRegReducer";
import Boardsdetails from "../reducer/BoardsReducer"

export const rootReducer = combineReducers({
    UserReg,
    Boardsdetails
});
export default rootReducer