import {
  Container,
  Box,
  Grid,
  Typography,
  Button,
  useMediaQuery,
  useTheme
} from "@mui/material";
import React, { useState } from "react";
import { ACCENT_COLOR, BOXES_COLOR, SKILLS_FIRST_ROW ,SKILLS_SECOND_ROW,SKILLS_THIRD_ROW,SKILLS_FOURTH_ROW} from "../Constants";

const BOXES_WIDTH = 200;
const BOXES_HEIGHT = 180;

const Skills = () => {
    
    const SingleSkill = ({image,text,index}) => {
      const [boxColors, setboxColors] = useState({
        boxShadow: "",
        backgroundColor: BOXES_COLOR,
        color: "white",
      });
    
      const handleChangeBoxColors = (color, shadow, tcolor) => {
        setboxColors({
          boxShadow: shadow,
          backgroundColor: color,
          color: tcolor,
        });
      };

     
    return (
      <Grid item md={4} lg={2}>
        <Box
        data-aos="zoom-in"
        data-aos-delay={index * 10}
        data-aos-duration="500"
        >
        <Box
          
          onMouseOver={() => handleChangeBoxColors(ACCENT_COLOR, " 3px 3px 50px rgb(5, 196, 188)", "black")}
          onMouseLeave={() => handleChangeBoxColors(BOXES_COLOR, " 0px 0px 0px rgb(5, 196, 188)", "white")}
          display="flex"
          justifyContent="center"
          gap={2}
          alignItems="center"
          flexDirection="column"
          borderRadius={5}
          width={BOXES_WIDTH}
          height={BOXES_HEIGHT}
          boxShadow={boxColors.boxShadow}
          bgcolor={boxColors.backgroundColor}
          style={{ cursor: "pointer", transition: "all 0.5s linear" }}
        >
          <img width={80} height={80} src={image} alt="Loading" />
          <Typography color={boxColors.color} variant="h5">
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
      <Typography
        data-aos="fade-right"
        data-aos-delay="200"
        color={"white"}
        gutterBottom
        fontWeight="bold"
        variant={"h3"}
        textAlign="center"
        mt={5}
        mb={2}
      >
        Skills
      </Typography>
      <Typography data-aos="fade-left" data-aos-delay="200" px={5} textAlign="center" mb={5} variant={matches ? "h6":"h5"} color="white">
      Here are some of my skills on which I have been working on for the past 2 years.
      </Typography>
      <Grid container px={matches ? 5 : 0}>
        <Grid my={5} justifyContent={matches ? "center" : ""} container columnSpacing={matches ? 10 : 40} rowSpacing={5} item>
          {[...SKILLS_FIRST_ROW,...SKILLS_SECOND_ROW,...SKILLS_THIRD_ROW,...SKILLS_FOURTH_ROW].map((element,index) => {
            return <SingleSkill index={index} key={element.key} {...element} />
          })}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Skills;
