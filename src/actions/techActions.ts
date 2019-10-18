import axios from "axios";
import { Action, ActionCreator } from "redux";
import { ThunkResult } from "../interfaces/Actions";
import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  TECHS_ERROR,
  SET_TECH_LOADING
} from "./actionTypes";
import { Tech } from "../interfaces/Techs";

const getTechs: ActionCreator<Action> = (techs: Tech[]) => ({
  type: GET_TECHS,
  payload: techs
});

export const startGettingTechs: ActionCreator<
  ThunkResult
> = () => async dispatch => {
  try {
    setLoading();

    const res = await axios.get("/techs");

    dispatch(getTechs(res.data));
  } catch (err) {
    dispatch(setTechError(err.response.statusText));
  }
};

const addTech: ActionCreator<Action> = (tech: Tech) => ({
  type: ADD_TECH,
  payload: tech
});

export const startAddingTech: ActionCreator<ThunkResult> = (
  tech: Tech
) => async dispatch => {
  try {
    setLoading();

    const res = await axios.post("/techs", tech);
    console.log(res.data);

    dispatch(addTech(res.data));
  } catch (err) {
    dispatch(setTechError(err.response.statusText));
  }
};

const deleteTech: ActionCreator<Action> = (id: string) => ({
  type: DELETE_TECH,
  payload: id
});

export const startDeletingTech: ActionCreator<ThunkResult> = (
  id: string
) => async dispatch => {
  try {
    setLoading();

    await axios.delete(`/techs/${id}`);

    dispatch(deleteTech(id));
  } catch (err) {
    dispatch(setTechError(err.response.statusText));
  }
};

const setTechError = (err: string) => ({
  type: TECHS_ERROR,
  payload: err
});

const setLoading = () => ({
  type: SET_TECH_LOADING
});
