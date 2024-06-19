import { Box, Button, Container, Grid, Typography, Stack,useTheme,useMediaQuery } from "@mui/material";
import { BOXES_COLOR, ICON_BACKGROUND_COLOR, ACCENT_COLOR } from "../Constants";
import { center } from "../Helpers";

const ExpAndEducationComp = ({icon,title,subtitle,description,date}) => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box display="flex" gap={10} my={10}>
      {matches && <Box>
         <Box
          width={60}
          height={60}
           data-aos="zoom-in"
                data-aos-duration="500"
          borderRadius={100}
          bgcolor={BOXES_COLOR}
          style={{ boxShadow: "3px 3px 20px rgb(5, 196, 188)" }}
          {...center}
        >
         {icon}
        </Box>
      </Box>}
      <Box>
        <Typography
          data-aos="fade-right"
          data-aos-duration="500"
          ml={4}
          color={ACCENT_COLOR}
          fontWeight="bold"
          variant="h5"
        >
          {date}
        </Typography>
        <Typography
          data-aos="fade-left"
          data-aos-duration="1000"
          ml={4}
          my={3}
          color={"white"}
          fontWeight="bold"
          variant="h3"
        >
          {title}
        </Typography>
        <Typography
          data-aos="fade-right"
          data-aos-duration="1500"
          ml={4}
          my={3}
          color={"white"}
          fontWeight="bold"
          variant="h5"
        >
          {subtitle}
        </Typography>
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
