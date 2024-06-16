import { Box, Typography } from "@mui/material";
import React from "react";
import { ACCENT_COLOR, BOXES_COLOR } from "../Constants";
import CustomBubblyLink from "./CustomBubblyLink";
import { center } from "../Helpers";

const Banner = ({heading,description}) => {
  return (
    <Box
      height={300}
      {...center}
      gap={5}
      flexDirection="column"
      bgcolor={BOXES_COLOR}
      mb={10}
    >
      <Typography variant="h2" fontWeight="bold" color={"white"}>
        {heading}
      </Typography>
      <Typography
        {...center}
        variant="h5"
        fontWeight="bold"
        color={"white"}
      >
        <CustomBubblyLink to={"/"}>Home</CustomBubblyLink>{" "}
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
