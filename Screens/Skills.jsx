import {
  Container,
  Box,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState, lazy } from "react";
import {
  ACCENT_COLOR,
  BOXES_COLOR,
  SKILLS_FIRST_ROW,
  SKILLS_SECOND_ROW,
  SKILLS_THIRD_ROW,
  SKILLS_FOURTH_ROW,
} from "../Constants";
import "../src/index.css";

const HeadingAndDescription = lazy(() =>
  import("../Components/HeadingAndDescription")
);

const BOXES_WIDTH = 200;
const BOXES_HEIGHT = 180;

const Skills = () => {
  const SingleSkill = ({ image, text, index }) => {
    return (
      <Grid item md={4} lg={2}>
        <Box
          data-aos="zoom-in"
          data-aos-delay={index * 10}
          data-aos-duration="500"
        >
          <Box
            display="flex"
            justifyContent="center"
            gap={2}
            alignItems="center"
            flexDirection="column"
            borderRadius={5}
            width={BOXES_WIDTH}
            height={BOXES_HEIGHT}
            className="skillsBoxes"
          >
            <img width={80} height={80} src={image} alt="Loading" />
            <Typography className="boxesText" variant="h5">
              {text}
            </Typography>
          </Box>
        </Box>
      </Grid>
    );
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Container
      maxWidth={"lg"}
      sx={{ padding: "0 !important" }}
      component={"section"}
    >
      <HeadingAndDescription
        heading="Skills"
        description="Here are some of my skills on which I have been working on for the past 2 years."
      />
      <Grid container px={matches ? 5 : 0}>
        <Grid
          my={5}
          justifyContent={matches ? "center" : ""}
          container
          columnSpacing={matches ? 10 : 40}
          rowSpacing={5}
          item
        >
          {[
            ...SKILLS_FIRST_ROW,
            ...SKILLS_SECOND_ROW,
            ...SKILLS_THIRD_ROW,
            ...SKILLS_FOURTH_ROW,
          ].map((element, index) => {
            return <SingleSkill index={index} key={element.key} {...element} />;
          })}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Skills;
