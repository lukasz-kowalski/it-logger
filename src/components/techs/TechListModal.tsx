import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGettingTechs } from "../../actions/techActions";
import TechItem from "./TechItem";
import { Tech } from "../../interfaces/Techs";

const TechListModal = () => {
  const dispatch = useDispatch();

  const techState = useSelector((state: any) => state.tech);

  const { techs, loading } = techState;

  useEffect(() => {
    dispatch(startGettingTechs());
  }, [dispatch]);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading &&
            techs.map((tech: Tech) => <TechItem key={tech.id} tech={tech} />)}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
