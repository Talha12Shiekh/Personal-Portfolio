import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Stack,
  useTheme,
  useMediaQuery,
  Tabs,
  Tab,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import { useState, lazy, Suspense } from "react";
import Loading from "./Loading";
import "../src/index.css";
import {
  ACCENT_COLOR,
  BOXES_COLOR,
  ICON_BACKGROUND_COLOR,
  TABS,
  PROJECTS_ICONS_SIZE,
  BACKGROUND_COLOR,
} from "../Constants";
const HeadingAndDescription = lazy(() =>
  import("../Components/HeadingAndDescription")
);

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={PROJECTS_ICONS_SIZE}
    height={PROJECTS_ICONS_SIZE}
    viewBox="0 0 24 24"
  >
    <path
      fill={ACCENT_COLOR}
      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
    ></path>
  </svg>
);

const DesktopIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width={PROJECTS_ICONS_SIZE} height={PROJECTS_ICONS_SIZE} viewBox="0 0 24 24"><path fill={ACCENT_COLOR} d="M10 19v-2H4q-.825 0-1.412-.587T2 15V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v10q0 .825-.587 1.413T20 17h-6v2h1q.425 0 .713.288T16 20t-.288.713T15 21H9q-.425 0-.712-.288T8 20t.288-.712T9 19zm-6-4h16V5H4zm0 0V5z"></path></svg>;

const ViewIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width={PROJECTS_ICONS_SIZE} height={PROJECTS_ICONS_SIZE} viewBox="0 0 24 24"><path fill={ACCENT_COLOR} d="M12 16q1.875 0 3.188-1.312T16.5 11.5t-1.312-3.187T12 7T8.813 8.313T7.5 11.5t1.313 3.188T12 16m0-1.8q-1.125 0-1.912-.788T9.3 11.5t.788-1.912T12 8.8t1.913.788t.787 1.912t-.787 1.913T12 14.2m0 4.8q-3.35 0-6.113-1.8t-4.362-4.75q-.125-.225-.187-.462t-.063-.488t.063-.488t.187-.462q1.6-2.95 4.363-4.75T12 4t6.113 1.8t4.362 4.75q.125.225.188.463t.062.487t-.062.488t-.188.462q-1.6 2.95-4.362 4.75T12 19m0-2q2.825 0 5.188-1.487T20.8 11.5q-1.25-2.525-3.613-4.012T12 6T6.813 7.488T3.2 11.5q1.25 2.525 3.613 4.013T12 17"></path></svg>

const Projects = () => {
  const [value, setValue] = useState("All");
  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Container
      maxWidth={"lg"}
      sx={{ padding: 5 }}
      component={"section"}
    >
      <Suspense fallback={<Loading />}>
        <HeadingAndDescription
          heading="Projects"
          description="I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects."
        />
        <Box
          sx={{ width: "100%" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            sx={{ color: ACCENT_COLOR, marginBlock: 5 }}
            textColor="white"
            indicatorColor="primary"
            aria-label="secondary tabs example"
          >
            {TABS.map(({ title, value, key }) => {
              return (
                <Tab
                  sx={{
                    fontSize: 25,
                    textTransform: "capitalize",
                    marginInline: 5,
                  }}
                  key={key}
                  value={value}
                  label={title}
                />
              );
            })}
          </Tabs>
        </Box>
        <Box display="flex" justifyContent={"space-between"} flexWrap={"wrap"}>
          <Card
            sx={{ maxWidth: 345, backgroundColor: BOXES_COLOR, padding: 2,marginTop:4 }}
            className="projectsCard"
          >
            <CardMedia
              sx={{ height: 200, marginBottom: 4 }}
              image="demo.PNG"
              title="green iguana"
            />
            <CardContent style={{ padding: 0 }}>
              <Typography
                gutterBottom
                color={"white"}
                fontWeight={"bold"}
                variant="h5"
                component="div"
              >
                Lizard
              </Typography>
              <Typography variant="body" color={"white"}>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                padding: 0,
                height: 50,
                display: "flex",
                alignItems: "flex-end",
                gap:2,
                justifyContent:"flex-start"
              }}
            >
              <Button startIcon={<GithubIcon />} variant="text" size="small" color="secondary">
                <Typography color={ACCENT_COLOR} textTransform={"capitalize"}>
                  Code
                </Typography>
              </Button>
              <Button startIcon={<ViewIcon />} variant="text" size="small">
                <Typography color={ACCENT_COLOR} textTransform={"capitalize"}>
                  View
                </Typography>
              </Button>
              <Button startIcon={<DesktopIcon />} variant="text" size="small">
                <Typography color={ACCENT_COLOR} textTransform={"capitalize"}>
                  Live
                </Typography>
              </Button>
            </CardActions>
          </Card>
          <Card
            sx={{ maxWidth: 345, backgroundColor: BOXES_COLOR, padding: 2,marginTop:4 }}
            className="projectsCard"
          >
            <CardMedia
              sx={{ height: 200, marginBottom: 4 }}
              image="demo.PNG"
              title="green iguana"
            >
                <Box bgcolor="rgba(0,0,0,.5)" height="100%" display="flex" justifyContent={"center"} alignItems="center">
                <Typography color={"white"} variant="h3">
                    Completed
                </Typography>
                </Box>
            </CardMedia>
            <CardContent style={{ padding: 0 }}>
              <Typography
                gutterBottom
                color={"white"}
                fontWeight={"bold"}
                variant="h5"
                component="div"
              >
                Lizard
              </Typography>
              <Typography variant="body" color={"white"}>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                padding: 0,
                height: 50,
                display: "flex",
                alignItems: "flex-end",
                gap:2,
                justifyContent:"flex-start"
              }}
            >
              <Button startIcon={<GithubIcon />} variant="text" size="small" color="secondary">
                <Typography color={ACCENT_COLOR} textTransform={"capitalize"}>
                  Code
                </Typography>
              </Button>
              <Button startIcon={<ViewIcon />} variant="text" size="small">
                <Typography color={ACCENT_COLOR} textTransform={"capitalize"}>
                  View
                </Typography>
              </Button>
              <Button startIcon={<DesktopIcon />} variant="text" size="small">
                <Typography color={ACCENT_COLOR} textTransform={"capitalize"}>
                  Live
                </Typography>
              </Button>
            </CardActions>
          </Card>
          <Card
            sx={{ maxWidth: 345, backgroundColor: BOXES_COLOR, padding: 2,marginTop:4 }}
            className="projectsCard"
          >
            <CardMedia
              sx={{ height: 200, marginBottom: 4 }}
              image="demo.PNG"
              title="green iguana"
            >
                <Box bgcolor="rgba(0,0,0,.5)" height="100%" display="flex" justifyContent={"center"} alignItems="center">
                <Typography color={"white"} variant="h3">
                    Pending
                </Typography>
                </Box>
            </CardMedia>
            <CardContent style={{ padding: 0 }}>
              <Typography
                gutterBottom
                color={"white"}
                fontWeight={"bold"}
                variant="h5"
                component="div"
              >
                Lizard
              </Typography>
              <Typography variant="body" color={"white"}>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                padding: 0,
                height: 50,
                display: "flex",
                alignItems: "flex-end",
                gap:2,
                justifyContent:"flex-start"
              }}
            >
              <Button startIcon={<GithubIcon />} variant="text" size="small" color="secondary">
                <Typography color={ACCENT_COLOR} textTransform={"capitalize"}>
                  Code
                </Typography>
              </Button>
              <Button startIcon={<ViewIcon />} variant="text" size="small">
                <Typography color={ACCENT_COLOR} textTransform={"capitalize"}>
                  View
                </Typography>
              </Button>
              <Button startIcon={<DesktopIcon />} variant="text" size="small">
                <Typography color={ACCENT_COLOR} textTransform={"capitalize"}>
                  Live
                </Typography>
              </Button>
            </CardActions>
          </Card>
         
        </Box>
      </Suspense>
    </Container>
  );
};

export default Projects;
