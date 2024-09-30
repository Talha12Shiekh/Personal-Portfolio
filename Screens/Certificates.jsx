import { Container } from "@mui/material";
import React from "react";
import HeadingAndDescription from "../Components/HeadingAndDescription";
import SmallProjectCard from "../Components/SmallProjectCard";
import { CERTIFICATES } from "../Constants";
import { AnimatedGrid } from "../Components/ReusableTabsAndGrid";

const Certificates = () => {
  return (
    <Container
      maxWidth={"lg"}
      sx={{ padding: "0 !important" }}
      component={"section"}
    >
      <HeadingAndDescription
        heading="Certificates"
        description="Here are some of my certifications earned through dedication and hard work over the past 2 years."
      />
      <AnimatedGrid gap={60}>
        {CERTIFICATES.map(({ key, title, downloadlink, image,type }) => (
          <SmallProjectCard
            key={key}
            downloadFile={downloadlink}
            title={title}
            projectImage={image}
            type={type}
          />
        ))}
      </AnimatedGrid>
    </Container>
  );
};

export default Certificates;
