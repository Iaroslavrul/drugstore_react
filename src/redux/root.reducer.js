import { combineReducers } from 'redux';
import { medicinesListReducer } from "./reducers";

// main reducer which includes others
export const rootReducer = combineReducers({
    medicinesListReducer
});
