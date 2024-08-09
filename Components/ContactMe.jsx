import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React, { lazy, Suspense } from "react";
import { BOXES_COLOR } from "../Constants";
import { center } from "../Helpers";
const CustomButton = lazy(() => import("./CustomButton"));
import { useNavigate } from "react-router-dom";
import Loading from "../Screens/Loading";

const ContactMe = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  const navigate = useNavigate();
  return (
    <Box
      bgcolor={BOXES_COLOR}
      mt={10}
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
      <Suspense fallback={<Loading />}>
        <Box>
          <CustomButton
            href=""
            onClick={() => {
              navigate("/contacts");
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            children={
              <Typography
                textTransform="capitalize"
                fontSize={23}
                fontWeight="bold"
                color="white"
              >
                Contact me
              </Typography>
            }
          />
        </Box>
        </Suspense>
    </Box>
  );
};

export default ContactMe;
