import Atropos from "atropos/react";
import React ,{useState} from "react";
import {
  ACCENT_COLOR,
  BOXES_COLOR,
  GITHUB,
  DesktopIcon,
  ViewIcon,
} from "../Constants";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const CARD_DESCRIPTION_LIMIT= `Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica  except`
// import {GitHub} from '@mui/icons-material;

const ProjectCard = () => {
    const [showStatus,setshowStatus] = useState(false);
  return (
    <Atropos className="my-atropos" onEnter={() => setshowStatus(p => !p)} onLeave={() => setshowStatus(p => !p)}>
      <Card
        sx={{
          maxWidth: 345,
          backgroundColor: BOXES_COLOR,
          padding: 2,
          marginTop: 4,
        }}
        className="projectsCard"
      >
        <CardMedia sx={{ height: 200, marginBottom: 4 }} image="demo.PNG">
          {showStatus && <Box
            bgcolor="rgba(0,0,0,.5)"
            height="100%"
            display="flex"
            justifyContent={"center"}
            alignItems="center"
          >
            <Typography color={"white"} variant="h3">
              Completed
            </Typography>
          </Box>}
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
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica  except 
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            padding: 0,
            height: 50,
            display: "flex",
            alignItems: "flex-end",
            gap: 2,
            justifyContent: "flex-start",
          }}
        >
          <Button
            startIcon={<GITHUB />}
            variant="text"
            size="small"
            color="secondary"
          >
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
    </Atropos>
  );
};

export default ProjectCard;
