import { Box, Button, Typography,useTheme,useMediaQuery } from "@mui/material";
import React,{lazy,Suspense} from "react";
import { BOXES_COLOR } from "../Constants";
import { center } from "../Helpers";
const CustomButton = lazy(() => import("./CustomButton"));
const CustomBubblyLink = lazy(() => import("./CustomBubblyLink"));
import Loading from "../Screens/Loading";


const ContactMe = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Box
      bgcolor={BOXES_COLOR}
      my={10}
      {...center}
      justifyContent={matches ? "center" : "space-between"}
      flexDirection={matches ? "column" : "row"}
      p={10}
      gap={matches ? 5 : 0}

    >
      <Box>
        <Typography
          lineHeight={1.5}
          variant="h3"
          textAlign="center"
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
