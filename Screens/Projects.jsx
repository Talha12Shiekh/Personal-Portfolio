import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Stack,
  useTheme,
  useMediaQuery,
  Tabs,
  Tab,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import Loading from "./Loading";
import "../src/index.css";
import {
  ACCENT_COLOR,
  BOXES_COLOR,
  ICON_BACKGROUND_COLOR,
  TABS,
  PROJECTS_ICONS_SIZE,
  BACKGROUND_COLOR,
  MOBILE_PROJECTS,
  WEB_PROJECTS,
} from "../Constants";
import {ReusableTabs,AnimatedGrid} from "../Components/ReusableTabsAndGrid";
const HeadingAndDescription = lazy(() =>
  import("../Components/HeadingAndDescription")
);
const ProjectCard = lazy(() => import("../Components/ProjectCard"));
const SmallProjects = lazy(() => import("../Components/SmallProjects"));
const Projects = () => {
  
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
    <Suspense fallback={<Loading />}>
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
              viewImages,
              skills,
              platform,
            };
            return <ProjectCard key={key} {...projectsObj} />;
          })}
        </AnimatedGrid>
        <SmallProjects />
      </Container>
    </Suspense>
  );
};

export default Projects;
