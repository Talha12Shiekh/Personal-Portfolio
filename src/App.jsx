import { Suspense, lazy } from "react";
import { Box, CssBaseline } from "@mui/material";
import { BACKGROUND_COLOR } from "../Constants";
const Navbar = lazy(() => import("../Components/Navbar"));
const Home = lazy(() => import("../Screens/Home"));
const About = lazy(() => import("../Screens/About"));

function App() {
  return (
    <Box width="100%" bgcolor={BACKGROUND_COLOR}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <CssBaseline />
        <Navbar />
        <Home />
        <About />
      </Suspense>
    </Box>
  );
}

export default App;
