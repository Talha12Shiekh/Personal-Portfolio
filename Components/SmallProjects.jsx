import {
  Box,
  useMediaQuery,
  useTheme,
  Container,
  Tabs,
  Tab,
} from "@mui/material";
import React, { lazy, Suspense, useState } from "react";
import { SMALL_TABS } from "../Constants";
import Loading from "../Screens/Loading";
const SmallProjectCard = lazy(() => import("./SmallProjectCard"));
const HeadingAndDescription = lazy(() =>
  import("../Components/HeadingAndDescription")
);
import { motion } from "framer-motion";
import { ReusableTabs, AnimatedGrid } from "./ReusableTabsAndGrid";

const SmallProjects = () => {
  const [value, setValue] = useState("Web");

  const handleChange = (_, newValue) => {
    setValue(newValue);
    // if (newValue === "Web") {
    //   SETPROJECTS(WEB_PROJECTS);
    // } else if (newValue === "Mobile") {
    //   SETPROJECTS(MOBILE_PROJECTS);
    // } else {
    //   SETPROJECTS(ALLPROJECTS);
    // }
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
      <AnimatedGrid>
        <SmallProjectCard />
        <SmallProjectCard />
        <SmallProjectCard />
      </AnimatedGrid>
    </Suspense>
  );
};

export default SmallProjects;
