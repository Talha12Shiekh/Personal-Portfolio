import Atropos from "atropos/react";
import React, { useState,lazy,Suspense } from "react";
import { ACCENT_COLOR, BOXES_COLOR } from "../Constants";
import { VisibilityOutlined, Computer } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "../src/index.css";
const ProjectsModal = lazy(() => import("./ProjectsModal"))
import {motion} from "framer-motion"
const CARD_DESCRIPTION_LIMIT = `Developed a feature-rich calculator app using React Native, designed to perform complex arithmetic calculations with ease. The app o . The app o The app oThe app oThe app o`;
import { GitHub } from "@mui/icons-material";
import Loading from "../Screens/Loading"

const ProjectCard = ({
  image,
  title,
  description,
  codeLink,
  live,
  liveDisabled,
  viewImages,
  skills,
  platform
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  return (
    <>
    <Suspense fallback={<Loading/>}>

      <ProjectsModal
        title={title}
        viewImages={viewImages}
        skills={skills}
        handleClose={handleClose}
        description={description}
        codeLink={codeLink}
        live={live}
        liveDisabled={liveDisabled}
        open={open}
        platform={platform}
      />
    </Suspense>

      <Atropos
        shadow={false}
        shadowScale={0}
        highlight={false}
        className="my-atropos"
      >
        <motion.div
        layout
        >

        <Card
          onClick={handleOpen}
          sx={{
            maxWidth: 345,
            backgroundColor: BOXES_COLOR,
            padding: 2,
            marginTop: 4,
          }}
          className="projectsCard"
        >
          <CardMedia
            data-atropos-offset="5"
            loading="lazy"
            sx={{ height: 200, marginBottom: 4}}
            image={image}
          ></CardMedia>
          <CardContent style={{ padding: 0, height: 160, overflow: "hidden" }}>
            <Typography
              gutterBottom
              color={"white"}
              fontWeight={"bold"}
              variant="h5"
              component="div"
            >
              {title}
            </Typography>
            <Typography variant="body" color={"white"}>
              {description.length > CARD_DESCRIPTION_LIMIT.length
                ? description.slice(0, CARD_DESCRIPTION_LIMIT.length - 1) +
                  " . . ."
                : description}
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
              data-atropos-offset="5"
              startIcon={<GitHub className="projects_icon" />}
              variant="text"
              size="small"
              color="secondary"
              href={codeLink}
              target="_blank"
              className="projects_button"
            >
              <Typography color={ACCENT_COLOR} textTransform={"capitalize"}>
                Code
              </Typography>
            </Button>

            <Button
              data-atropos-offset="10"
              startIcon={<VisibilityOutlined className="projects_icon" />}
              variant="text"
              size="small"
              color="secondary"
              className="projects_button"
              target="_blank"
            >
              <Typography color={ACCENT_COLOR} textTransform={"capitalize"}>
                View
              </Typography>
            </Button>
            <Button
              data-atropos-offset="10"
              startIcon={<Computer className="projects_icon" />}
              variant="text"
              size="small"
              color="secondary"
              href={live}
              className="projects_button"
              disabled={liveDisabled}
              target="_blank"
            >
              <Typography color={ACCENT_COLOR} textTransform={"capitalize"}>
                Live
              </Typography>
            </Button>
          </CardActions>
        </Card>
        </motion.div>

      </Atropos>
    </>
  );
};

export default ProjectCard;
