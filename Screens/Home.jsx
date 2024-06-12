import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { ACCENT_COLOR, BACKGROUND_COLOR } from "../Constants";
import { NAVBAR_HEIGHT } from "../Components/Navbar";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Typed from "typed-js"

const Home = () => {
  const theme = useTheme();
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
          height={`calc(${matches ? 160 :100}vh - ${NAVBAR_HEIGHT})`}
        >
          <Grid  container p={5} direction={matches ? "column-reverse" : ""} justifyContent="space-between" spacing={2}>
            <Grid item data-aos="fade-right" xs={10} sm={10} md={7} lg={6}>
            <Typography color="white" gutterBottom fontWeight="bold" variant="h6">
                Hello it's me
              </Typography>
              <Typography color="white" gutterBottom fontWeight="bold" variant={matches ? "h3" : "h2"}>
                Talha Khurram
              </Typography>
              <Typography color="white" display="flex" gap={1} fontWeight="bold" variant={matches ? "h5" : "h4"}>
                I'm a
                <Typography className="typingText"  color={ACCENT_COLOR} gutterBottom fontWeight="bold" variant={matches ? "h5" : "h4"}>
                  Frontend Developer
                </Typography>
              </Typography>
              <Typography color="white" gutterBottom fontWeight="bold" variant="body">
                I am an enthusiastic and adaptable frontend developer, always
                ready to embrace new challenges. Driven by a love for learning,
                I strive to deliver top-notch results. Skilled in HTML, CSS,
                JavaScript, React.js, and React Native I am eager to make a
                significant impact and reach new heights in the field of web
                development.
              </Typography>

              <Box mt={3}>
                <Button
                  target="_blank"
                  href="../public/TalhaShiekhResume2.pdf"
                  style={{
                    backgroundColor: ACCENT_COLOR,
                    borderRadius: 10,
                    paddingInline:40,
                    boxShadow: '3px 3px 15px rgb(5, 196, 188)'
                  }}
                  variant="contained"
                >
                  <Typography textTransform="capitalize" fontSize={23} fontWeight="bold" color="white">
                    Check Resume
                  </Typography>
                </Button>
              </Box>
            </Grid>
            <Grid data-aos="fade-left" item xs={10} sm={10} md={5} lg={4}>
            <img height={"420vh"} width={"400vw"} src="../public/Talha.png" style={{filter: 'drop-shadow(2px 2px 9px white)',maxWidth:"100%",padding:0,margin:0}} alt="Loading..." />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Home;
