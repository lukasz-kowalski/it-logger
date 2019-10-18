import React, { useState, ChangeEvent, MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { startAddingTech } from "../../actions/techActions";
//@ts-ignore
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal: React.FC = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFirstName(e.target.value);

  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setLastName(e.target.value);

  const handleSubmit = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (!firstName || !lastName) {
      M.toast({ html: "Please enter the first and last name" });
    } else {
      dispatch(startAddingTech({ firstName, lastName }));
      M.toast({ html: `${firstName} ${lastName} was added as tech` });
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleLastNameChange}
            />
            <label htmlFor="lastName" className="active">
              First Name
            </label>
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

export default AddTechModal;
