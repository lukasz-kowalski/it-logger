import { Log } from "./Logs";

export type LogsState = Readonly<{
  logs: Log[];
  current: Log | null;
  loading: boolean;
  error: string | null;
}>;
