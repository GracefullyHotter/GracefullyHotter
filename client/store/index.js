import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import sauces from "./sauces";
import sauce from "./sauce";
import users from "./users";
import user from "./user";
import cart from "./cart";
import orders from "./orders";

const reducer = combineReducers({ auth, sauces, sauce, users, user, cart, orders });

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
export * from "./cart";
export * from "./orders";
