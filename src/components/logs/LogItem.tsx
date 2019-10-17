import React from "react";
import { useDispatch } from "react-redux";
import Moment from "react-moment";
import { Log } from "../../interfaces/Logs";
import { deleteLog, setCurrent } from "../../actions/logActions";
//@ts-ignore
import M from "materialize-css/dist/js/materialize.min.js";

interface Props {
  log: Log;
}

const LogItem: React.FC<Props> = ({ log }) => {
  const { id, attention, message, tech, date } = log;
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteLog(id));
    M.toast({ html: "Log deleted" });
  };

  const handleClick = () => dispatch(setCurrent(log));

  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${attention ? "red-text" : "blue-text"}`}
          onClick={handleClick}
        >
          {message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{id}</span> last updated by{" "}
          <span className="black-text">{tech}</span> on{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{date}</Moment>
        </span>
        <a href="#!" onClick={onDelete} className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

export default LogItem;
