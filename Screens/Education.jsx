import { Container } from "@mui/material";
import React from "react";
import ExpAndEducationComp from "../Components/ExpAndEducationComp";
import { EDUCATION } from "../Constants";
import HeadingAndDescription from "../Components/HeadingAndDescription";

const Education = () => {
  return (
    <Container
      maxWidth={"lg"}
      sx={{ padding: "0 !important" }}
      component={"section"}
    >
      <HeadingAndDescription
        heading="Education"
        description="My education has been a journey of self-discovery and growth. My educational details are as follows."
      />
      {EDUCATION.map(({ icon, title, subtitle, description, date, key }) => {
        const element = { icon, title, subtitle, description, date };
        return <ExpAndEducationComp key={key} {...element} />;
      })}
    </Container>
  );
};

export default Education;
