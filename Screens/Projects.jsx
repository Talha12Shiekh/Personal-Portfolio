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
import Atropos from 'atropos/react';
import Loading from "./Loading";
import "../src/index.css";
import {
  ACCENT_COLOR,
  BOXES_COLOR,
  ICON_BACKGROUND_COLOR,
  TABS,
  PROJECTS_ICONS_SIZE,
  BACKGROUND_COLOR,
  MOBILE_PROJECTS
} from "../Constants";
import ProjectCard from "../Components/ProjectCard";
const HeadingAndDescription = lazy(() =>
  import("../Components/HeadingAndDescription")
);

const Projects = () => {
  const [value, setValue] = useState("All");
  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Container
      maxWidth={"lg"}
      sx={{ padding: 5 }}
      component={"section"}
    >
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
            aria-label="secondary tabs example"
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
        <Box display="flex" justifyContent={"space-around"} flexWrap={"wrap"}>
          {
            MOBILE_PROJECTS.map(project => {
              const {image,title,description,codeLink,live,liveDisabled,key} = project;
              const projectsObj = {image,title,description,codeLink,live,liveDisabled};
              return <ProjectCard key={key} {...projectsObj}/>
            })
          }
            
        </Box>
      </Suspense>
    </Container>
  );
};

export default Projects;
