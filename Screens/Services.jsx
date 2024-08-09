import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { center } from "../Helpers";
import { ICON_BACKGROUND_COLOR, SKILLS } from "../Constants";
import "../src/index.css";
import HeadingAndDescription from "../Components/HeadingAndDescription";


const Services = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));

  
  return (
    <Box>
      <HeadingAndDescription
        heading="Services"
        description="Here are the services that i provide to my clients"
      />
      <Grid container {...center} columnSpacing={5}>
        {SKILLS.map(({ icon, heading, description, key }) => {
          return (
            <Grid key={key} mb={matches ? 4 : 0} item lg={3.5} md={7} xs={10}>
              <Box
                p={3}
                {...center}
                flexDirection="column"
                borderRadius={5}
                className="servicesBox"
              >
                <Box
                  width={100}
                  height={100}
                  {...center}
                  borderRadius={100}
                  my={5}
                  backgroundColor={ICON_BACKGROUND_COLOR}
                >
                  {icon}
                </Box>
                <Typography variant="h5" color="white" fontWeight={500} mb={2}>
                  {heading}
                </Typography>
                <Typography
                  sx={{ wordBreak: "break-word" }}
                  variant="body1"
                  color="white"
                  m={1}
                  textAlign="center"
                >
                  {description}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
export default Services;
