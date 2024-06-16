import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { BOXES_COLOR } from "../Constants";
import { center } from "../Helpers";
import CustomBubblyLink from "./CustomBubblyLink";
import CustomButton from "./CustomButton";

const ContactMe = () => {
  return (
    <Box
      height={300}
      bgcolor={BOXES_COLOR}
      my={10}
      {...center}
      justifyContent="space-between"
      flexDirection="row"
      px={10}
    >
      <Box width={"50%"}>
        <Typography
          lineHeight={1.5}
          variant="h3"
          fontWeight="bold"
          color={"white"}
        >
          Have a project on your mind
        </Typography>
      </Box>
      <Box>
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
    </Box>
  );
};

export default ContactMe;
