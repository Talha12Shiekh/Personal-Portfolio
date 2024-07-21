import {
  Backdrop,
  Modal,
  Fade,
  Box,
  Typography,
  Icon,
  IconButton,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import {
  BACKGROUND_COLOR,
  ACCENT_COLOR,
  BOXES_COLOR,
  PROJECTS_SKILL_COLOR,
} from "../Constants";
import { Close } from "@mui/icons-material";
import "../src/index.css";
import { Carousel } from "react-responsive-carousel";
import { CustomArrow } from "./CustomArrows";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: BACKGROUND_COLOR,
  boxShadow: 24,
  p: 4,
  borderWidth: 0,
  my: 27,
  borderRadius: 5,
};

const ProjectsModal = ({
  open,
  handleClose,
  skills,
  description,
  title,
  liveDisabled,
  live,
  codeLink,
  viewImages,
}) => {
  const renderArrowNext = (clickHandler, hasNext) => {
    return <CustomArrow direction="next" onClick={clickHandler} hasNext={hasNext} />;
  };
  const renderArrowPrev = (clickHandler, hasNext) => {
    return <CustomArrow direction="prev" onClick={clickHandler} hasNext={hasNext} />;
  };

  const theme = useTheme();
  const checkingImageforLargerScreens = useMediaQuery(theme.breakpoints.down("xl"));
  const checkingModalforSmallerScreens = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      className="projects_modal"
      disableAutoFocus
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={{...style,width:checkingModalforSmallerScreens ? "90%" : "60%"}}>
          <Box width="100%" mb={1} textAlign="right">
            <IconButton onClick={handleClose}>
              <Close style={{ color: "white" }} />
            </IconButton>
          </Box>
          <Box width="100%" height="50%">
            <Carousel
              renderArrowNext={renderArrowNext}
              renderArrowPrev={renderArrowPrev}
              showIndicators={false}
              showStatus={false}
              showThumbs={false}
            >
              {viewImages.map((img) => {
                return (
                  <Box component="div">
                    <img
                      alt="Loading..."
                      src={img}
                      loading="lazy"
                      style={{ width: !checkingImageforLargerScreens ? "60%" : "100%", height: "150%" }}
                    />
                  </Box>
                );
              })}
            </Carousel>
            <Typography
              mt={2}
              gutterBottom
              color={"white"}
              fontWeight={"bold"}
              variant="h4"
              component="div"
            >
              {title}
            </Typography>
            <Box display="flex" mt={3} gap={1} flexWrap="wrap">
              {skills.map((skill) => {
                return (
                  <Box
                    key={skill}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    backgroundColor={PROJECTS_SKILL_COLOR}
                    p={1}
                    borderRadius={2}
                    mb={0}
                  >
                    <Typography fontSize={13} color="white">
                      {skill}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
            <Box my={3}>
              <Typography color="white">{description}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Button
                href={codeLink}
                target="-blank"
                variant="contained"
                sx={{ bgcolor: PROJECTS_SKILL_COLOR, width: "48%", p: 1 }}
              >
                <Typography textTransform="capitalize" variant="h6">
                  View Code
                </Typography>
              </Button>
              <Button
                href={live}
                className="projects_modal_btn"
                target="_blank"
                disabled={liveDisabled}
                variant="contained"
                sx={{ bgcolor: ACCENT_COLOR, width: "48%", p: 1 }}
              >
                <Typography variant="h6" textTransform="capitalize">
                  View Live
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ProjectsModal;
