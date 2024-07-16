import { Typography, useMediaQuery, useTheme,Box } from "@mui/material";
import AnimatedTypography from "./AnimatedTypography";

const HeadingAndDescription = ({ heading, description }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Box overflow={"hidden"}>
      <AnimatedTypography
        offset={-300}
        color={"white"}
        gutterBottom
        fontWeight="bold"
        variant={"h3"}
        textAlign="center"
        mt={10}
        mb={2}
      >
        {heading}
      </AnimatedTypography>
      <AnimatedTypography
      offset={300}
        px={5}
        textAlign="center"
        mb={10}
        variant={matches ? "h6" : "h5"}
        color="white"
      >
        {description}
      </AnimatedTypography>
    </Box>
  );
};

export default HeadingAndDescription;
