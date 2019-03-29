import { combineReducers } from "redux"
import boards from "../reducer/BoardsReducer"
import user from "../reducer/UserRegReducer";


export const rootReducer = combineReducers({
    user,
    boards
});
export default rootReducer