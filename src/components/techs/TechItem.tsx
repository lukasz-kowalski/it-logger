import React from "react";
import { Tech } from "../../interfaces/Techs";

interface Props {
  tech: Tech;
}

const TechItem: React.FC<Props> = ({ tech }) => {
  return (
    <li className="collection-item">
      <div>
        {tech.firstName} {tech.lastName}
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

export default TechItem;
