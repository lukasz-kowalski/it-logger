import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGettingTechs } from "../../actions/techActions";
import { Tech } from "../../interfaces/Techs";

const TechSelectOptions: React.FC = () => {
  const dispatch = useDispatch();
  const techState = useSelector((state: any) => state.tech);
  const { techs, loading } = techState;

  useEffect(() => {
    dispatch(startGettingTechs());
  }, [dispatch]);

  return (
    !loading &&
    techs.length > 0 &&
    techs.map((tech: Tech) => (
      <option key={tech.id} value={`${tech.firstName} ${tech.lastName}`}>
        {tech.firstName} {tech.lastName}
      </option>
    ))
  );
};

export default TechSelectOptions;
