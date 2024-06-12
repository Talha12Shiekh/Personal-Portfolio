import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { ACCENT_COLOR, BACKGROUND_COLOR } from "../Constants";
import { NAVBAR_HEIGHT } from "../Components/Navbar";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Home = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
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
          alignItems="center"
          width={"100%"}
          height={`calc(100vh - ${NAVBAR_HEIGHT})`}
        >
          <Grid
            display="flex"
            justifyContent={!matches ? "space-between" : "center"}
            container
            direction={matches ? "column-reverse" : "row"}
            spacing={2}
            alignItems="center"
          >
            <Grid  display={matches ? "flex" : ""} flexDirection={matches ? "column" : ""} justifyContent={matches ? "center" : ""} alignItems={matches ? "center" : ""} textAlign={matches ? "center" : ""} paddingInline={matches ? "50px !important" : 0}  item sm={9} md={3} lg={6}>
              <Typography color="white" gutterBottom fontWeight="bold" variant="h6">
                Hello it's me
              </Typography>
              <Typography color="white" gutterBottom fontWeight="bold" variant="h2">
                Talha Khurram
              </Typography>
              <Typography color="white" display="flex" gap={1} fontWeight="bold" variant="h4">
                I'm a
                <Typography color={ACCENT_COLOR} gutterBottom fontWeight="bold" variant="h4">
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
            <Grid item sm={9} lg={5}>
              <img height={"420vh"} width={"400vw"} src="../public/talha2.png" style={{transform:`scale(${matches ? 1 : 1.3})`,filter: 'drop-shadow(2px 2px 9px white)'}} alt="Loading..." />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Home;
