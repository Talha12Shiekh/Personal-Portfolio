import { Suspense, lazy, useEffect } from "react";
import { Box, CssBaseline } from "@mui/material";
import { BACKGROUND_COLOR } from "../Constants";
import { Outlet } from "react-router-dom";
const Navbar = lazy(() => import("../Components/Navbar"));
import { BubblyContainer } from "react-bubbly-transitions";
import Loading from "../Screens/Loading";
import "./index.css";
import AOS from "aos";


AOS.init();
function App() {
  return (
    <Box width="100%" bgcolor={BACKGROUND_COLOR}>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <CssBaseline />
        <BubblyContainer />
        <Outlet />
      </Suspense>
    </Box>
  );
}

export default App;
