import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { ACCENT_COLOR, BACKGROUND_COLOR } from "../Constants";
import { NAVBAR_HEIGHT } from "../Components/Navbar";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, transform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

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
  const [scale, setscale] = useState({
    image: 1,
    button: 1,
  });
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  AOS.init();

  return (
    <>
      <Container
        maxWidth={"lg"}
        sx={{ padding: "0 !important" }}
        component={"section"}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems={matches ? "flex-start" : "center"}
          width={"100%"}
          height={`calc(${matches ? 150 : 100}vh - ${NAVBAR_HEIGHT})`}
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
                  className="typingText"
                  color={ACCENT_COLOR}
                  gutterBottom
                  fontWeight="bold"
                  variant={matches ? "h5" : "h4"}
                >
                  <WritingText />
                </Typography>
              </Typography>
              <Typography
                color="white"
                gutterBottom
                fontWeight="bold"
                variant="body"
              >
                I am an enthusiastic and adaptable frontend developer, always
                ready to embrace new challenges. Driven by a love for learning,
                I strive to deliver top-notch results. Skilled in HTML, CSS,
                JavaScript, React.js, and React Native I am eager to make a
                significant impact and reach new heights in the field of web
                development.
              </Typography>

              <Box mt={3}>
                <Button
                    data-aos="zoom-in"
                  onMouseOver={() =>
                    setscale((p) => ({
                      ...p,
                      button: 1.2,
                    }))
                  }
                  onMouseLeave={() =>
                    setscale((p) => ({
                      ...p,
                      button: 1,
                    }))
                  }
                  target="_blank"
                  href="./TalhaShiekhResume2.pdf"
                  style={{
                    backgroundColor: ACCENT_COLOR,
                    borderRadius: 10,
                    paddingInline: 40,
                    boxShadow: "3px 3px 15px rgb(5, 196, 188)",
                    transform: `scale(${scale.button})`,
                  }}
                  variant="contained"
                >
                  <Typography
                    textTransform="capitalize"
                    fontSize={23}
                    fontWeight="bold"
                    color="white"
                  >
                    Check Resume
                  </Typography>
                </Button>
              </Box>
            </Grid>
            <Grid data-aos="fade-left" item xs={10} sm={10} md={5} lg={4}>
              <img
                onMouseOver={() =>
                  setscale((p) => ({
                    ...p,
                    image: 1.2,
                  }))
                }
                onMouseLeave={() =>
                  setscale((p) => ({
                    ...p,
                    image: 1,
                  }))
                }
                height={"420vh"}
                width={"400vw"}
                src="./Talha.png"
                style={{
                  filter: "drop-shadow(2px 2px 9px white)",
                  maxWidth: "100%",
                  padding: 0,
                  margin: 0,
                  transform: `scale(${scale.image})`,
                  transition:"all 0.5s linear"
                }}
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
