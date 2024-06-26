import { Typography, useMediaQuery, useTheme,Box } from "@mui/material";

const HeadingAndDescription = ({ heading, description }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Box overflow={"hidden"}>
      <Typography
        data-aos="fade-right"
        data-aos-delay="200"
        color={"white"}
        gutterBottom
        fontWeight="bold"
        variant={"h3"}
        textAlign="center"
        mt={5}
        mb={2}
      >
        {heading}
      </Typography>
      <Typography
        data-aos="fade-left"
        data-aos-delay="200"
        px={5}
        textAlign="center"
        mb={5}
        variant={matches ? "h6" : "h5"}
        color="white"
      >
        {description}
      </Typography>
    </Box>
  );
};

export default HeadingAndDescription;
