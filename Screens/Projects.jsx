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
import Atropos from "atropos/react";
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
  WEB_PROJECTS
} from "../Constants";
const HeadingAndDescription = lazy(() =>
  import("../Components/HeadingAndDescription")
);
import ProjectCard from "../Components/ProjectCard"
const Projects = () => {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  const checkTabs = useMediaQuery(theme.breakpoints.down("md"));

  const ALLPROJECTS = [...MOBILE_PROJECTS,...WEB_PROJECTS]
  const [PROJECTS,SETPROJECTS] = useState(ALLPROJECTS);

  const [value, setValue] = useState("All");

  const handleChange = (_, newValue) => {
    setValue(newValue);
    if(newValue === "Web"){
      SETPROJECTS(WEB_PROJECTS)
    }else if (newValue === "Mobile"){
      SETPROJECTS(MOBILE_PROJECTS)
    }else {
      SETPROJECTS(ALLPROJECTS)
    }
  };


  return (
    <Container maxWidth={"lg"} sx={{ padding: 5 }} component={"section"}>
      <Suspense fallback={<Loading />}>
        <HeadingAndDescription
          heading="Projects"
          description="I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects."
        />
        <Box
          sx={{ width: "100%" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            sx={{ color: ACCENT_COLOR, marginBlock: 5 }}
            textColor="white"
            indicatorColor="primary"
            aria-label="My Projects"
            orientation={checkTabs ? "vertical" : "horizontal"}
          >
            {TABS.map(({ title, value, key }) => {
              return (
                <Tab
                  sx={{
                    fontSize: 25,
                    textTransform: "capitalize",
                    marginInline: 5,
                  }}
                  key={key}
                  value={value}
                  label={title}
                />
              );
            })}
          </Tabs>
        </Box>
        <Box display="flex" gap={5} justifyContent={matches ? "center" : "flex-start"} flexWrap={"wrap"}>
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
              skills
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
              skills
            };
            return (
                <ProjectCard key={key} {...projectsObj} />
            );
          })}
        </Box>
      </Suspense>
    </Container>
  );
};

export default Projects;
