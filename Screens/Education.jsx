import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React, { lazy, Suspense } from "react";
const HeadingAndDescription = lazy(() =>
  import("../Components/HeadingAndDescription")
);
const ExpAndEducationComp = lazy(() =>
  import("../Components/ExpAndEducationComp")
);
import { EDUCATION } from "../Constants";

import Loading from "../Screens/Loading";

const Education = () => {
  return (
    <Container
      maxWidth={"lg"}
      sx={{ padding: "0 !important"}}
      component={"section"}
    >
      <Suspense fallback={<Loading />}>
        <HeadingAndDescription
          heading="Education"
          description="My education has been a journey of self-discovery and growth. My educational details are as follows."
        />
      </Suspense>
      {EDUCATION.map(({ icon, title, subtitle, description, date, key }) => {
        const element = { icon, title, subtitle, description, date };
        return <ExpAndEducationComp key={key} {...element} />;
      })}
    </Container>
  );
};

export default Education;
