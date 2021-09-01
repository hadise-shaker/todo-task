import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Thunk from "redux-thunk";
import { reducers } from "./reducers/index";

const middlewareEnhancer = applyMiddleware(Thunk);
const composedEnhancers = composeWithDevTools(middlewareEnhancer);
const store = createStore(reducers, undefined, composedEnhancers);

export default store;
