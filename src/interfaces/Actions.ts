import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootReducer } from "../reducers/index";

export type ThunkResult = ThunkAction<
  Promise<void>,
  RootReducer,
  null,
  Action<string>
>;
