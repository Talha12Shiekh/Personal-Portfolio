import { Box, Button, Container, Grid, Typography, Stack,useTheme,useMediaQuery } from "@mui/material";
import { BOXES_COLOR, ICON_BACKGROUND_COLOR, ACCENT_COLOR } from "../Constants";
import AnimatedTypography from "./AnimatedTypography";

const ExpAndEducationComp = ({icon,title,subtitle,description,date}) => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box display="flex" gap={10} my={10}>
      {matches && <Box ml={2}>
        {icon}
      </Box>}
      <Box overflow="hidden">
        <AnimatedTypography
          offset={-100}
          ml={4}
          color={ACCENT_COLOR}
          fontWeight="bold"
          variant="h5"
        >
          {date}
        </AnimatedTypography>
        <AnimatedTypography
          ml={4}
          my={3}
          color={"white"}
          fontWeight="bold"
          variant="h3"
        >
          {title}
        </AnimatedTypography>
        <AnimatedTypography
        offset={-100}
          ml={4}
          my={3}
          color={"white"}
          fontWeight="bold"
          variant="h5"
        >
          {subtitle}
        </AnimatedTypography>
        <Box>
        <Typography sx={{ wordBreak: "break-word" }} ml={4} my={3} color={BOXES_COLOR} variant="h6">
          {description}
        </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ExpAndEducationComp;
