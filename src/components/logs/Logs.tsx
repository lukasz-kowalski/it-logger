import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLogs } from "../../actions/logActions";
import { RootReducer } from "../../reducers/index";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";

const Logs = () => {
  const dispatch = useDispatch();
  const logsState = useSelector((state: RootReducer) => state.log);
  const { logs, loading } = logsState;

  useEffect(() => {
    dispatch(getLogs());
  }, [dispatch]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center">System Logs</h4>
        </li>
        {!loading && logs.length === 0 ? (
          <p className="center">No logs to show...</p>
        ) : (
          logs.map(log => <LogItem key={log.id} log={log} />)
        )}
      </ul>
    </div>
  );
};

export default Logs;
