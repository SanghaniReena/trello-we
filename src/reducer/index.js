import { combineReducers } from "redux"
import BoardReducer from "../reducer/BoardsReducer"
import UserRegReducer from "../reducer/UserRegReducer";


export const rootReducer = combineReducers({
    BoardReducer,
    UserRegReducer
});
export default rootReducer