import { combineReducers } from "redux"
import boards from "../reducer/BoardsReducer"
import users from "../reducer/UserRegReducer";


export const rootReducer = combineReducers({
    users,
    boards
});
export default rootReducer