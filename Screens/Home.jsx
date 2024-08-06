import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import React, { lazy, Suspense } from "react";
import { ACCENT_COLOR, ICONS_ARRAY } from "../Constants";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Loading from "../Screens/Loading";
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
  const matchesUP = useMediaQuery(theme.breakpoints.up("md"));


  return (
    <>
      <Container
        maxWidth={"lg"}
        sx={{ padding: "0 !important" }}
        component={"section"}
      >
        <Box width={"100%"}>
          <Grid
            p={matchesUP ? 5 : 0}
            container
            justifyContent="space-between"
            alignItems={matches ? "center" : ""}
            spacing={2}
            flexDirection={matches ? "column-reverse" : ""}
          >
            <Grid item xs={10} sm={10} md={7} lg={6}>
              <Typography
                className="animate__animated animate__fadeInDown"
                color="white"
                gutterBottom
                fontWeight="bold"
                mb={2}
                variant="h4"
                textAlign={matches ? "center" : ""}
              >
                Hello it's me
              </Typography>
              <Typography
                className="animate__animated animate__fadeInDown"
                color="white"
                gutterBottom
                fontWeight="bold"
                variant={"h2"}
                textAlign={matches ? "center" : ""}
                mb={2}
              >
                Talha Khurram
              </Typography>
              <Typography
               
                className="animate__animated animate__fadeInDown"
                color="white"
                display="flex"
                justifyContent={matches ? "center" : ""}
                gap={1}
                gutterBottom
                fontWeight="bold"
                mb={2}
                variant={"h4"}
              >
                I'm a <span style={{color:ACCENT_COLOR}}><WritingText /></span>
              </Typography>
              <Box component="div" textAlign={matches ? "center" : ""} width="100%">
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
                justifyContent={matches ? "center" : ""}
                alignItems="center"
                mt={2}
                width={"100%"}
                gap={3}
                height={50}
              >
                {ICONS_ARRAY.map(({ href, key, icon }) => {
                  return (
                    <IconButton
                      key={key}
                      target="_blank"
                      variant="text"
                      href={href}
                      className="home_icons"
                    >
                      {icon}
                    </IconButton>
                  );
                })}
              </Box>
              <Suspense fallback={<Loading />}>
                
                <Box mt={3} textAlign={matches ? "center" : ""} >
                  <CustomButton
                    href="./Talha_Frontend_Developer_Resume.pdf"
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
            <Grid item xs={10} sm={10} md={5} lg={4}>
              <img
                className="animate__animated animate__bounceInRight talhaImage"
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
