import { combineReducers } from "redux";
import logReducer from "./logReducer";

const rootReducer = combineReducers({
  log: logReducer
});

export type RootReducer = ReturnType<typeof rootReducer>;
export default rootReducer;
