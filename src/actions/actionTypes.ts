import { Log } from "../interfaces/Logs";
import { Tech } from "../interfaces/Techs";

export const GET_LOGS = "GET_LOGS";
export const ADD_LOG = "ADD_LOG";
export const UPDATE_LOG = "UPDATE_LOG";
export const DELETE_LOG = "DELETE_LOG";
export const SET_CURRENT = "SET_CURRENT";
export const CLEAR_CURRENT = "CLEAR_CURRENT";
export const SET_LOADING = "SET_LOADING";
export const LOGS_ERROR = "LOGS_ERROR";
export const SEARCH_LOGS = "SEARCH_LOGS";
export const GET_TECHS = "GET_TECHS";
export const ADD_TECH = "ADD_TECH";
export const DELETE_TECH = "DELETE_TECH";
export const TECHS_ERROR = "TECHS_ERROR";
export const SET_TECH_LOADING = "SET_LOADING";

interface GetLogs {
  type: typeof GET_LOGS;
  payload: Log[];
}

interface AddLog {
  type: typeof ADD_LOG;
  payload: Log;
}

interface UpdateLog {
  type: typeof UPDATE_LOG;
  payload: Log;
}

interface DeleteLog {
  type: typeof DELETE_LOG;
  payload: number;
}

interface SearchLogs {
  type: typeof SEARCH_LOGS;
  payload: Log[];
}

interface SetLoading {
  type: typeof SET_LOADING;
}

interface SetCurrent {
  type: typeof SET_CURRENT;
  payload: Log;
}

interface ClearCurrent {
  type: typeof CLEAR_CURRENT;
}

interface LogsError {
  type: typeof LOGS_ERROR;
  payload: string;
}

interface GetTechs {
  type: typeof GET_TECHS;
  payload: any;
}

interface AddTech {
  type: typeof ADD_TECH;
  payload: Tech;
}

interface DeleteTech {
  type: typeof DELETE_TECH;
  payload: string;
}

interface TechsError {
  type: typeof TECHS_ERROR;
  payload: string;
}

interface SetTechLoading {
  type: typeof SET_TECH_LOADING;
}

export type LogsActions =
  | GetLogs
  | AddLog
  | UpdateLog
  | DeleteLog
  | SearchLogs
  | SetLoading
  | SetCurrent
  | ClearCurrent
  | LogsError;

export type TechsActions =
  | GetTechs
  | AddTech
  | DeleteTech
  | TechsError
  | SetTechLoading;
