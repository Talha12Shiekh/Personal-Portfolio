import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { ACCENT_COLOR, BOXES_COLOR } from "../Constants";
import { center } from "./Banner";
import CustomBubblyLink from "./CustomBubblyLink";

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
          Dont worry for contact i`m available
        </Typography>
      </Box>
      <Box>
        <Button
          target="_blank"
          style={{
            backgroundColor: ACCENT_COLOR,
            borderRadius: 10,
            paddingInline: 40,
            boxShadow: "3px 3px 15px rgb(5, 196, 188)",
            transition: "all 0.5s linear",
          }}
          variant="contained"
        >
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
        </Button>
      </Box>
    </Box>
  );
};

export default ContactMe;
