import { Suspense, lazy } from "react";
import { Box, CssBaseline } from "@mui/material";
import { BACKGROUND_COLOR } from "../Constants";
import { Routes, Route } from "react-router-dom";
const Navbar = lazy(() => import("../Components/Navbar"));
const Home = lazy(() => import("../Screens/Home"));
const About = lazy(() => import("../Screens/About"));
const Skills = lazy(() => import("../Screens/Skills"));
import { BubblyContainer } from "react-bubbly-transitions";
import Banner from "../Components/Banner";
import ContactMe from "../Components/ContactMe";
import BannerAndContact from "../Components/BannerAndContact";

function App() {
  return (
    <Box width="100%" bgcolor={BACKGROUND_COLOR}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Navbar />
        <CssBaseline />
        <BubblyContainer />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Skills />
              </>
            }
          />
          <Route
            path="about"
            element={
              <BannerAndContact>
                <About />
              </BannerAndContact>
            }
          />
          <Route
            path="skills"
            element={
              <BannerAndContact>
                <Skills />
              </BannerAndContact>
            }
          />
        </Routes>
      </Suspense>
    </Box>
  );
}

export default App;
