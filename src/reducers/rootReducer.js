import { combineReducers } from "redux"
import mountains from "./mountainsReducer"

const rootReducer = combineReducers({
    mountains
});

export default rootReducer;