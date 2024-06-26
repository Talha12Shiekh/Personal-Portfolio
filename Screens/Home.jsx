import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState,lazy,Suspense } from "react";
import { ACCENT_COLOR } from "../Constants";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Loading from "../Screens/Loading";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";
const CustomButton = lazy(() => import("../Components/CustomButton"));
import "../src/index.css";
import gif from "../public/bg.gif"

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

  const ICONS_SIZE = "1.8em";

  const ICONS_ARRAY = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={ICONS_SIZE}
          height={ICONS_SIZE}
          viewBox="0 0 24 24"
        >
          <path
            fill={ACCENT_COLOR}
            d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
          ></path>
        </svg>
      ),
      key: 1,
      href: "https://www.instagram.com/codepalace144/",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={ICONS_SIZE}
          height={ICONS_SIZE}
          viewBox="0 0 24 24"
        >
          <path
            fill={ACCENT_COLOR}
            d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
          ></path>
        </svg>
      ),
      key: 2,
      href: "https://www.linkedin.com/in/talha-shiekh-a99b4b313/",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={ICONS_SIZE}
          height={ICONS_SIZE}
          viewBox="0 0 24 24"
        >
          <path
            fill={ACCENT_COLOR}
            d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
          ></path>
        </svg>
      ),
      key: 3,
      href: "https://github.com/Talha12Shiekh",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={ICONS_SIZE}
          height={ICONS_SIZE}
          viewBox="0 0 24 24"
        >
          <path
            fill={ACCENT_COLOR}
            d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"
          ></path>
        </svg>
      ),
      key: 4,
      href: "https://www.youtube.com/@codepalace-or3vq",
    },
  ];

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
