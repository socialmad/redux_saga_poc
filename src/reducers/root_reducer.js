import { combineReducers } from "redux";
import { quoteReducer } from "./quote_reducer";

const rootReducer = combineReducers({
    quoteReducer
})

export default rootReducer;