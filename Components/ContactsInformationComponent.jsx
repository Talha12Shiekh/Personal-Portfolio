import React from "react";
import { ACCENT_COLOR } from "../Constants";
import { Box, Typography } from "@mui/material";

const ContactsInformationComponent = ({icon,text}) => {
  return (
    <Box display={"flex"} alignItems={"center"} gap={3}>
      <Box>
        {icon}
      </Box>
      <Box justifyContent={"center"} alignItems={"center"}>
        <Typography variant="h5" color={"white"}>
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactsInformationComponent;
