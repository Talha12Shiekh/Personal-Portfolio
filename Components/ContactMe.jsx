import { Box, Button, Typography } from "@mui/material";
import React,{lazy,Suspense} from "react";
import { BOXES_COLOR } from "../Constants";
import { center } from "../Helpers";
const CustomButton = lazy(() => import("./CustomButton"));
const CustomBubblyLink = lazy(() => import("./CustomBubblyLink"));
import Loading from "../Screens/Loading";


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
      <Suspense fallback={<Loading/>}>
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
      </Suspense>
    </Box>
  );
};

export default ContactMe;
