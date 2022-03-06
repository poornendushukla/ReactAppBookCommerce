import { combineReducers } from "redux";
import {getBooksList} from "../reducer/templateReducer/templateReducer";
import {getSignup} from "../reducer/templateReducer/signupReducer";
export default combineReducers({getBooksList,getSignup});