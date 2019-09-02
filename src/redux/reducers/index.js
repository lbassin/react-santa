import { combineReducers } from "redux";
import employeeReducer from "./employee";

const rootReducer = combineReducers({
    employeeReducer
})

export default rootReducer;
