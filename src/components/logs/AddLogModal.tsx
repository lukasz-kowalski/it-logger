import React, { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import TechSelectOptions from "../../components/techs/TechSelectOptions";
import { addLog } from "../../actions/logActions";
//@ts-ignore
import M from "materialize-css/dist/js/materialize.min.js";

const AddLogModal: React.FC = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setMessage(e.target.value);

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setTech(e.target.value);

  const handleCheckboxChange = () => setAttention(!attention);

  const handleSubmit = () => {
    if (!message || !tech) {
      M.toast({ html: "Please enter a message and tech" });
    } else {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date()
      };

      dispatch(addLog(newLog));

      M.toast({ html: `Log added by ${tech}` });

      setMessage("");
      setTech("");
      setAttention(false);
    }
  };

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
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
            <label htmlFor="message" className="active">
              Log Message
            </label>
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

export default AddLogModal;
