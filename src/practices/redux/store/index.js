import { legacy_createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import { reducer } from "./reducer";

const storeEnhancer = applyMiddleware(thunkMiddleware);

const store = legacy_createStore(reducer, storeEnhancer);
export default store;
