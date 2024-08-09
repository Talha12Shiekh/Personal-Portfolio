import { Box, Container } from "@mui/material";
import React from "react";
import { EXPERIENCE } from "../Constants";
import HeadingAndDescription from "../Components/HeadingAndDescription";
import ExpAndEducationComp from "../Components/ExpAndEducationComp";

const Experience = () => {
    
  return (
    <Container
      maxWidth={"lg"}
      sx={{ padding: "0 !important" }}
      component={"section"}
    >
        <HeadingAndDescription
          heading="Experience"
          description="My working experience as a frontend developer"
        />
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
