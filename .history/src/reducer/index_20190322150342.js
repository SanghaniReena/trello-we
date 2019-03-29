import { combineReducers } from "redux"
import handleCustomer from "../reducer/CustomerReducer";
import handleSalesman from "../reducer/SalesmanReducer";


export const rootReducer = combineReducers({
    handleSalesman,
    handleCustomer
});
export default rootReducer