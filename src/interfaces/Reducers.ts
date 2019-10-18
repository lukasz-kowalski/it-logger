import { Log } from "./Logs";
import { Tech } from "./Techs";

export type LogsState = Readonly<{
  logs: Log[];
  current: Log | null;
  loading: boolean;
  error: string | null;
}>;

export type TechState = Readonly<{
  techs: Tech[];
  loading: boolean;
  error: null | string;
}>;
