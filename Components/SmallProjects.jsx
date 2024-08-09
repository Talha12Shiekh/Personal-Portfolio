import React, { useState } from "react";
import { SMALL_TABS, SMALL_WEB_PROJECTS,SMALL_MOBILE_PROJECTS } from "../Constants";
import SmallProjectCard from "./SmallProjectCard"
import HeadingAndDescription from "../Components/HeadingAndDescription";
import { ReusableTabs, AnimatedGrid } from "./ReusableTabsAndGrid";
import { Container } from "@mui/material";

const SmallProjects = () => {
  const [value, setValue] = useState("Web");

  const [PROJECTS, SETPROJECTS] = useState(SMALL_WEB_PROJECTS);

  const handleChange = (_, newValue) => {
    setValue(newValue);
    if (newValue === "Web") {
      SETPROJECTS(SMALL_WEB_PROJECTS);
    } else if (newValue === "Mobile") {
      SETPROJECTS(SMALL_MOBILE_PROJECTS);
    }
  };
  return (
    <Container maxWidth={"lg"} sx={{ padding: 5 }} component={"section"}>
      <HeadingAndDescription
        heading="Small Projects"
        description="I’ve completed several small projects, each demonstrating unique skills and innovative solutions"
      />
      <ReusableTabs
        value={value}
        handleChange={handleChange}
        TABS_CONTENT={SMALL_TABS}
      />
      <AnimatedGrid gap={60}>
        {
          PROJECTS.map((project) => {
            const {title,downloadFile,key,image} = project;
            return <SmallProjectCard key={key} title={title} downloadFile={downloadFile} projectImage={image} />
          })
        }
      </AnimatedGrid>
    </Container>
  );
};

export default SmallProjects;
