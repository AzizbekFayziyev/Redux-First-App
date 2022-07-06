import { combineReducers, createStore } from "redux";
import reducer from "./reducer";

const combineReducer = combineReducers({
    counterR: reducer,
})

const store = createStore(combineReducer);

export default store;