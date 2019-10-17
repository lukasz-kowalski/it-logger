import { Reducer } from "redux";
import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  UPDATE_LOG,
  DELETE_LOG,
  SEARCH_LOGS,
  SET_CURRENT,
  CLEAR_CURRENT,
  LogsActions
} from "../actions/actionTypes";
import { LogsState } from "../interfaces/Reducers";
import { Log } from "../interfaces/Logs";

const initialState: LogsState = {
  logs: [],
  current: null,
  loading: true,
  error: null
};

const logReducer: Reducer<LogsState, LogsActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false
      };

    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false
      };

    case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map((log: Log) =>
          log.id === action.payload.id ? action.payload : log
        )
      };

    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter((log: Log) => log.id !== action.payload),
        loading: false
      };

    case SEARCH_LOGS:
      return { ...state, logs: action.payload };

    case SET_CURRENT:
      return { ...state, current: action.payload };

    case CLEAR_CURRENT:
      return { ...state, current: null };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    case LOGS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default logReducer;
