import React, { useState, useEffect, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import TechSelectOptions from "../../components/techs/TechSelectOptions";
import { updateLog } from "../../actions/logActions";
import { Log } from "../../interfaces/Logs";
//@ts-ignore
import M from "materialize-css/dist/js/materialize.min.js";

const EditLogModal: React.FC = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const current: Log = useSelector((state: any) => state.log.current);

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setMessage(e.target.value);

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setTech(e.target.value);

  const handleCheckboxChange = () => setAttention(!attention);

  const handleSubmit = () => {
    if (!message || !tech) {
      M.toast({ html: "Please enter a message and tech" });
    } else {
      const updatedLog = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date()
      };

      dispatch(updateLog(updatedLog));
      M.toast({ html: `Log updated by ${tech}` });
      setMessage("");
      setTech("");
      setAttention(false);
    }
  };

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={handleSelectChange}
            >
              <option value="" disabled>
                Select Technician
              </option>
              <TechSelectOptions />
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  onChange={handleCheckboxChange}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={handleSubmit}
          className="modal-close waves-effect blue waves-light btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%"
};

export default EditLogModal;
