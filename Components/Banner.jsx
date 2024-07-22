import { Box, Typography } from "@mui/material";
import React, { lazy, Suspense } from "react";
import { ACCENT_COLOR, BOXES_COLOR } from "../Constants";
const CustomBubblyLink = lazy(() => import("./CustomBubblyLink"));
import { center } from "../Helpers";
import Loading from "../Screens/Loading";


const Banner = ({ heading, description }) => {
  return (
    <Box
      height={300}
      {...center}
      gap={5}
      flexDirection="column"
      bgcolor={BOXES_COLOR}
      mb={10}
    >
      <Typography
      className="animate__animated animate__bounceIn"
        variant="h2"
        fontWeight="bold"
        color={"white"}
      >
        {heading}
      </Typography>
      <Typography {...center} variant="h5" fontWeight="bold" color={"white"}>
        <Suspense fallback={<Loading />}>
          <CustomBubblyLink to={"/"}>Home</CustomBubblyLink>{" "}
        </Suspense>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6z"
          ></path>
        </svg>
        <CustomBubblyLink>{description}</CustomBubblyLink>
      </Typography>
    </Box>
  );
};

export default Banner;
