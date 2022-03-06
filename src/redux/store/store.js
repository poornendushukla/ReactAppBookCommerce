import { createStore, applyMiddleware } from "redux";
import RootReducer from "../reducer/rootReducer";
import thunk from "redux-thunk";
const middleware = [thunk];

export default createStore(RootReducer, applyMiddleware(...middleware));
