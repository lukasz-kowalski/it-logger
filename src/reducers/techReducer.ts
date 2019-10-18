import { Reducer } from "redux";
import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  TECHS_ERROR,
  SET_TECH_LOADING,
  TechsActions
} from "../actions/actionTypes";
import { TechState } from "../interfaces/Reducers";
import { Tech } from "./../interfaces/Techs";

const initialState: TechState = {
  techs: [],
  loading: false,
  error: null
};

const techReducer: Reducer<TechState, TechsActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_TECHS:
      return { ...state, techs: action.payload };
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false
      };
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter((tech: Tech) => tech.id !== action.payload),
        loading: false
      };
    case SET_TECH_LOADING:
      return { ...state, loading: true };
    case TECHS_ERROR:
      console.error(action.payload);
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default techReducer;
