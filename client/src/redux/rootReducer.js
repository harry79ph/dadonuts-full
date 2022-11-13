import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cartReducer from './cartReducer'

const rootReducer = combineReducers({
    shop: cartReducer,
    auth: authReducer
});

export default rootReducer;