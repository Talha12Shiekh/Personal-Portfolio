import {
  Container,
  Box,
  Grid,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import React ,{lazy,Suspense} from "react";
import { ACCENT_COLOR } from "../Constants";
import { useTheme } from "@emotion/react";
const CustomButton = lazy(() => import("../Components/CustomButton"));
const CustomBubblyLink = lazy(() => import("../Components/CustomBubblyLink"));
import Loading from "../Screens/Loading";


const About = () => {
  const theme = useTheme();
  const SMmatches = useMediaQuery(theme.breakpoints.down("sm"));

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
          alignItems={"center"}
          width={"100%"}
        >
          <Grid overflow={"hidden"} container p={5} justifyContent="space-around" spacing={2}>
            <Grid
              // data-aos="fade-right"
              // data-aos-delay="300"
              item
              xs={10}
              sm={10}
              md={4}
              lg={4}
            >
              <img
                loading="lazy"
                height={"420vh"}
                width={"400vw"}
                src="./Talha.png"
                style={{
                  filter: "drop-shadow(2px 2px 9px white)",
                  maxWidth: "100%",
                  padding: 0,
                  margin: 0,
                }}
                alt="Loading..."
              />
            </Grid>
            <Grid overflow="hidden" item xs={10} sm={10} md={6} lg={6}>
              <Typography
                // data-aos="fade-left"
                // data-aos-delay="100"
                color="white"
                gutterBottom
                fontWeight="bold"
                variant="h4"
              >
                About me
              </Typography>
              <Typography
                // data-aos="fade-right"
                // data-aos-delay="200"
                color={ACCENT_COLOR}
                gutterBottom
                fontWeight="bold"
                variant={SMmatches ? "h5" : "h3"}
              >
                Frontend Developer
              </Typography>
              <Typography
                color="white"
                gutterBottom
                fontSize={16}
                fontWeight="bold"
              >
                I am a dedicated frontend developer who loves taking on new
                challenges. I enjoy learning new things and strive to deliver
                the best results. I am skilled in HTML, CSS, JavaScript,
                React.js, and React Native, and I have worked on various
                projects. I pay close attention to detail and aim for high
                quality in my work. With a positive attitude and a
                problem-solving approach, I am always ready to adapt and grow. I
                am excited to contribute to meaningful projects and continue
                developing my skills in web development.
              </Typography>
<Suspense fallback={<Loading/>}>
              <Box mt={3}>
                <CustomButton
                  href=""
                  onClick={() => {}}
                  children={
                    <CustomBubblyLink to="/">
                      <Typography
                        textTransform="capitalize"
                        fontSize={23}
                        fontWeight="bold"
                        color="white"
                      >
                        Contact me
                      </Typography>
                    </CustomBubblyLink>
                  }
                />
              </Box>
              </Suspense>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default About;
