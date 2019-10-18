import React, { MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { startDeletingTech } from "../../actions/techActions";
import { Tech } from "../../interfaces/Techs";
//@ts-ignore
import M from "materialize-css/dist/js/materialize.min.js";

interface Props {
  tech: Tech;
}

const TechItem: React.FC<Props> = ({ tech: { id, firstName, lastName } }) => {
  const dispatch = useDispatch();

  const handleDelete = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(startDeletingTech(id));
    M.toast({ html: `${firstName} ${lastName} was added as tech` });
  };

  return (
    <li className="collection-item">
      <div>
        {firstName} {lastName}
        <a href="#!" className="secondary-content" onClick={handleDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

export default TechItem;
