import axios from "axios";
import { Action, ActionCreator } from "redux";
import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  UPDATE_LOG,
  DELETE_LOG,
  SEARCH_LOGS,
  SET_CURRENT,
  CLEAR_CURRENT
} from "./actionTypes";
import { ThunkResult } from "../interfaces/Actions";
import { Log } from "../interfaces/Logs";

export const getLogs: ActionCreator<ThunkResult> = () => async dispatch => {
  try {
    setLoading();

    const res = await axios.get("/logs");

    dispatch({
      type: GET_LOGS,
      payload: res.data
    });
  } catch (err) {
    dispatch(setLogError(err.response.statusText));
  }
};

export const setLoading: ActionCreator<Action> = () => ({
  type: SET_LOADING
});

export const addLog: ActionCreator<ThunkResult> = (
  log: Log
) => async dispatch => {
  try {
    setLoading();

    const res = await axios.post("/logs", log);

    const { data } = res;

    dispatch({
      type: ADD_LOG,
      payload: data
    });
  } catch (err) {
    dispatch(setLogError(err.response.statusText));
  }
};

export const updateLog: ActionCreator<ThunkResult> = (
  log: Log
) => async dispatch => {
  try {
    setLoading();

    const res = await axios.put(`/logs/${log.id}`, log);

    dispatch({
      type: UPDATE_LOG,
      payload: res.data
    });
  } catch (err) {
    dispatch(setLogError(err.response.statusText));
  }
};

export const searchLogs: ActionCreator<ThunkResult> = (
  text: string
) => async dispatch => {
  try {
    setLoading();

    const res = await axios.get(`/logs?q=${text}`);

    dispatch({ type: SEARCH_LOGS, payload: res.data });
  } catch (err) {
    dispatch(setLogError(err.response.statusText));
  }
};

export const deleteLog: ActionCreator<ThunkResult> = (
  id: number
) => async dispatch => {
  try {
    setLoading();

    await axios.delete(`/logs/${id}`);

    dispatch({
      type: DELETE_LOG,
      payload: id
    });
  } catch (err) {
    dispatch(setLogError(err.response.statusText));
  }
};

export const setCurrent: ActionCreator<Action> = (log: Log) => ({
  type: SET_CURRENT,
  payload: log
});

export const clearCurrent: ActionCreator<Action> = () => ({
  type: CLEAR_CURRENT
});

const setLogError = (err: string) => ({ type: LOGS_ERROR, payload: err });
