import {
  Box,
  useMediaQuery,
  useTheme,
  Container,
  Tabs,
  Tab,
} from "@mui/material";
import React, { lazy, Suspense, useState } from "react";
import { SMALL_TABS, SMALL_WEB_PROJECTS } from "../Constants";
import Loading from "../Screens/Loading";
const SmallProjectCard = lazy(() => import("./SmallProjectCard"));
const HeadingAndDescription = lazy(() =>
  import("../Components/HeadingAndDescription")
);
import { ReusableTabs, AnimatedGrid } from "./ReusableTabsAndGrid";

const SmallProjects = () => {
  const [value, setValue] = useState("Web");

  const ALLPROJECTS = [...SMALL_WEB_PROJECTS];
  const [PROJECTS, SETPROJECTS] = useState(ALLPROJECTS);

  const handleChange = (_, newValue) => {
    setValue(newValue);
    if (newValue === "Web") {
      SETPROJECTS(SMALL_WEB_PROJECTS);
    } else if (newValue === "Mobile") {
      SETPROJECTS([]);
    }
  };
  return (
    <Suspense fallback={<Loading />}>
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
    </Suspense>
  );
};

export default SmallProjects;
