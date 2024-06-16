import { Box, CircularProgress } from "@mui/material";
import React from "react";
import { center } from "../Helpers";

const Loading = () => {
  return (
    <Box {...center} bgcolor={"white"} width={"100%"} height="100vh">
      <CircularProgress size={"4rem"} />
    </Box>
  );
};

export default Loading;
