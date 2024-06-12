import { Suspense, lazy } from "react";
import { Box, CssBaseline } from "@mui/material";
import Home from "../Screens/Home";
import { BACKGROUND_COLOR } from "../Constants";
const Navbar = lazy(() => import("../Components/Navbar"));

function App() {
  return (
    <Box width="100%" bgcolor={BACKGROUND_COLOR}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <CssBaseline />
        <Navbar />
        <Home />
      </Suspense>
    </Box>
  );
}

export default App;
