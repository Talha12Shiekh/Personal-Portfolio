import { Box, CssBaseline } from "@mui/material";
import { BACKGROUND_COLOR } from "../Constants";
import { Outlet } from "react-router-dom";
import { BubblyContainer } from "react-bubbly-transitions";
import "./index.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


function App() {
  return (
    <Box width="100%" bgcolor={BACKGROUND_COLOR}>
        <Navbar />
        <CssBaseline />
        <BubblyContainer />
        <Outlet />
        <Footer/>
    </Box>
  );
}

export default App;
