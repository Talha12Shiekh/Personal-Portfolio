import {
  Container,
  Box,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { lazy, Suspense, useEffect, useRef } from "react";
import {
  SKILLS_FIRST_ROW,
  SKILLS_SECOND_ROW,
  SKILLS_THIRD_ROW,
  SKILLS_FOURTH_ROW,
} from "../Constants";
import "../src/index.css";
import Loading from "../Screens/Loading";
import Atropos from "atropos/react";
const HeadingAndDescription = lazy(() =>
  import("../Components/HeadingAndDescription")
);

const BOXES_WIDTH = 200;
const BOXES_HEIGHT = 180;

const Skills = () => {
  const SingleSkill = ({ image, text }) => {
    const skillRef = useRef(null);

    useEffect(() => {
      const handleIntersection = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add("animate__animated", "animate__zoomIn");
          }
        });
      };
  
      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1,
      });
  
      if (skillRef.current) observer.observe(skillRef.current);
  
      return () => {
        if (skillRef.current) observer.unobserve(skillRef.current);
      };
    }, []);
    return (
      <Grid item md={4} lg={2}>
        <Box ref={skillRef}>
          <Atropos
            rotateXMax={30}
            rotateYMax={30}
            highlight={false}
            activeOffset={100}
            className="skills_attropos"
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              borderRadius={5}
              gap={2}
              width={BOXES_WIDTH}
              height={BOXES_HEIGHT}
              className="skillsBoxes"
            >
              <img
                data-atropos-offset="8"
                width={80}
                height={80}
                src={image}
                alt="Loading"
              />
              <Typography className="boxesText" variant="h5">
                {text}
              </Typography>
            </Box>
          </Atropos>
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
      <Suspense fallback={<Loading />}>
        <HeadingAndDescription
          heading="Skills"
          description="Here are some of my skills on which I have been working on for the past 2 years."
        />
      </Suspense>
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
          ].map(({ image, text, key }, index) => {
            const element = { image, text };
            return <SingleSkill index={index} key={key} {...element} />;
          })}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Skills;
