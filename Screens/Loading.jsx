import { Box } from "@mui/material";
import React from "react";
import { center } from "../Helpers";
import { BallTriangle } from "react-loader-spinner";
import { ACCENT_COLOR, BACKGROUND_COLOR } from "../Constants";

const Loading = () => {
  return (
    <Box {...center} bgcolor={BACKGROUND_COLOR} width={"100%"} height="100vh">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color={ACCENT_COLOR}
        ariaLabel="Loading Please wait"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Box>
  );
};

export default Loading;
