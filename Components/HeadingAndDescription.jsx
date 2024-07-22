import { Typography, useMediaQuery, useTheme,Box } from "@mui/material";
import { useEffect, useRef } from "react";

const HeadingAndDescription = ({ heading, description }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));

  const headingRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === headingRef.current) {
            entry.target.classList.add("animate__animated", "animate__fadeInLeft");
          } else if (entry.target === descriptionRef.current) {
            entry.target.classList.add("animate__animated", "animate__fadeInRight");
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (headingRef.current) observer.observe(headingRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (descriptionRef.current) observer.unobserve(descriptionRef.current);
    };
  }, []);
  return (
    <Box overflow={"hidden"}>
      <Typography
      ref={headingRef}
        color={"white"}
        gutterBottom
        fontWeight="bold"
        variant={"h3"}
        textAlign="center"
        mt={10}
        mb={2}
      >
        {heading}
      </Typography>
      <Typography
      ref={descriptionRef}
        px={5}
        textAlign="center"
        mb={10}
        variant={matches ? "h6" : "h5"}
        color="white"
      >
        {description}
      </Typography>
    </Box>
  );
};

export default HeadingAndDescription;
