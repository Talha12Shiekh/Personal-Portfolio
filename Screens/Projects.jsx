import React from "react";
import "../src/index.css";
import SmallProjects from "../Components/SmallProjects";
import BigProjects from "../Components/BigProjects";
const Projects = () => {
  return (
    <>
        <BigProjects/>
        <SmallProjects />
    </>
  );
};

export default Projects;
