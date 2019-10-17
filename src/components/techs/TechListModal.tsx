import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tech } from "../../interfaces/Techs";
import TechItem from "./TechItem";

const TechListModal = () => {
  const [techs, setTechs] = useState<Tech[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getTechs();
  }, []);

  const getTechs = async () => {
    setLoading(true);
    const res = await axios.get("/techs");

    setTechs(res.data);
    setLoading(false);
  };

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading &&
            techs.map(tech => <TechItem key={tech.id} tech={tech} />)}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
