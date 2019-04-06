import { combineReducers } from "redux"
import BoardReducer from "../reducer/BoardsReducer"
import TeamReducer from "../reducer/TeamsReducer"
import UserRegReducer from "../reducer/UserRegReducer";


export const rootReducer = combineReducers({
    BoardReducer,
    UserRegReducer,
    TeamReducer
});
export default rootReducer