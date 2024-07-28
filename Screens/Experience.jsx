import { Box, Container } from "@mui/material";
import React, { lazy, Suspense } from "react";
const HeadingAndDescription = lazy(() =>
  import("../Components/HeadingAndDescription")
)
const ExpAndEducationComp = lazy(() =>
  import("../Components/ExpAndEducationComp")
);
import { EXPERIENCE } from "../Constants";

import Loading from "../Screens/Loading";

const Experience = () => {
    
  return (
    <Container
      maxWidth={"lg"}
      sx={{ padding: "0 !important" }}
      component={"section"}
    >
      <Suspense fallback={<Loading />}>
        <HeadingAndDescription
          heading="Experience"
          description="My working experience as a frontend developer"
        />
      </Suspense>
      <Box overflow="hidden">
      {
        EXPERIENCE.map(({icon,title,subtitle,description,date,key}) => {
          const element = {icon,title,subtitle,description,date}
          return <ExpAndEducationComp key={key} {...element}/>
        })
      }
      </Box>
    </Container>
  );
};

export default Experience;
