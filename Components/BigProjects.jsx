import React,{useState} from "react";
import HeadingAndDescription from "./HeadingAndDescription";
import ReusableTabs, { AnimatedGrid } from "./ReusableTabsAndGrid";
import { TABS, MOBILE_PROJECTS, WEB_PROJECTS } from "../Constants";
import { Container } from "@mui/material";
import ProjectCard from "./ProjectCard";

const BigProjects = () => {
  const ALLPROJECTS = [...MOBILE_PROJECTS, ...WEB_PROJECTS];
  const [PROJECTS, SETPROJECTS] = useState(ALLPROJECTS);

  const [value, setValue] = useState("All");

  const handleChange = (_, newValue) => {
    setValue(newValue);
    if (newValue === "Web") {
      SETPROJECTS(WEB_PROJECTS);
    } else if (newValue === "Mobile") {
      SETPROJECTS(MOBILE_PROJECTS);
    } else {
      SETPROJECTS(ALLPROJECTS);
    }
  };

  return (
    <Container maxWidth={"lg"} sx={{ padding: 5 }} component={"section"}>
      <HeadingAndDescription
        heading="Projects"
        description="I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects."
      />
      <ReusableTabs
        value={value}
        handleChange={handleChange}
        TABS_CONTENT={TABS}
      />
      <AnimatedGrid gap={40}>
        {PROJECTS.map((project) => {
          const {
            image,
            title,
            description,
            codeLink,
            live,
            liveDisabled,
            key,
            viewImages,
            skills,
            platform,
          } = project;
          const projectsObj = {
            image,
            title,
            description,
            codeLink,
            live,
            liveDisabled,
            viewImages,
            skills,
            platform,
          };
          return <ProjectCard key={key} {...projectsObj} />
        })}
      </AnimatedGrid>
    </Container>
  );
};

export default BigProjects;
