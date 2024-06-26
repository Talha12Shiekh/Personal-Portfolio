import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState,lazy,Suspense } from "react";
import { ACCENT_COLOR,ICONS_SIZE,ICONS_ARRAY } from "../Constants";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Loading from "../Screens/Loading";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";
const CustomButton = lazy(() => import("../Components/CustomButton"));
import "../src/index.css";

const WritingText = () => {
  return (
    <TypeAnimation
      sequence={[
        "Frontend Developer",
        1000,
        "Programmer",
        1000,
        "Problem Solver",
        1000,
        "Web Developer",
        1000,
      ]}
      wrapper="span"
      speed={20}
      repeat={Infinity}
    />
  );
};

const Home = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Container
        maxWidth={"lg"}
        sx={{ padding: "0 !important" }}
        component={"section"}

        >
        <Box
          width={"100%"}
        >
          <Grid
            container
            p={5}
            direction={matches ? "column-reverse" : ""}
            justifyContent="space-between"
            spacing={2}
          >
            <Grid item xs={10} sm={10} md={7} lg={6}>
              <Typography
                data-aos="fade-right"
                data-aos-duration="500"
                color="white"
                gutterBottom
                fontWeight="bold"
                variant="h6"
              >
                Hello it's me
              </Typography>
              <Typography
                data-aos="fade-left"
                data-aos-duration="1000"
                color="white"
                gutterBottom
                fontWeight="bold"
                variant={matches ? "h3" : "h2"}
              >
                Talha Khurram
              </Typography>
              <Typography
                data-aos="fade-right"
                data-aos-duration="1500"
                color="white"
                display="flex"
                gap={1}
                fontWeight="bold"
                variant={matches ? "h5" : "h4"}
              >
                I'm a
                <Typography
                  data-aos="fade-right"
                  data-aos-duration="1500"
                  className="typingText"
                  color={ACCENT_COLOR}
                  gutterBottom
                  fontWeight="bold"
                  variant={matches ? "h5" : "h4"}
                >
                  <WritingText />
                </Typography>
              </Typography>
              <Box component="div" width="100%">
                <Typography
                  color="white"
                  gutterBottom
                  fontWeight="bold"
                  variant="body"
                >
                  I am an enthusiastic and adaptable frontend developer, always
                  ready to embrace new challenges. Driven by a love for
                  learning, I strive to deliver top-notch results. Skilled in
                  HTML, CSS, JavaScript, React.js, and React Native I am eager
                  to make a significant impact and reach new heights in the
                  field of web development.
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mt={2}
                width={200}
                height={50}
              >
                {ICONS_ARRAY.map(({ href, key, icon }) => {
                  return (
                    <Button
                      key={key}
                      target="_blank"
                      variant="text"
                      href={href}
                    >
                      {icon}
                    </Button>
                  );
                })}
              </Box>
<Suspense fallback={<Loading/>}>
              <Box mt={3}>
                <CustomButton
                  href="./TalhaShiekhResume2.pdf"
                  onClick={() => {}}
                  children={
                    <Typography
                      textTransform="capitalize"
                      fontSize={23}
                      fontWeight="bold"
                      color="white"
                    >
                      Check Resume
                    </Typography>
                  }
                />
              </Box>
              </Suspense>
            </Grid>
            <Grid
             data-aos="fade-left"
              item xs={10} sm={10} md={5} lg={4}>
              <img
              className="talhaImage"
                loading="lazy"
                height={"420vh"}
                width={"400vw"}
                src="./Talha.png"
                alt="Loading..."
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Home;
