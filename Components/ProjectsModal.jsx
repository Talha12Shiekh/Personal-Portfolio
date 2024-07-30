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
  maxWidth: '800px',
width: '100%',
borderRadius: '16px',
height: 'min-content',
margin:"50px 10px",
backgroundColor: 'rgb(23, 23, 33)',
color: 'rgb(242, 243, 244)',
padding: '20px',
display: 'flex',
flexDirection: 'column',
position: 'relative',
 top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
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
  platform,
}) => {
  const renderArrowNext = (clickHandler, hasNext) => {
    return (
      <CustomArrow direction="next" onClick={clickHandler} hasNext={hasNext} />
    );
  };
  const renderArrowPrev = (clickHandler, hasNext) => {
    return (
      <CustomArrow direction="prev" onClick={clickHandler} hasNext={hasNext} />
    );
  };

  const theme = useTheme();
  const checkingModalforSmallerScreens = useMediaQuery(
    theme.breakpoints.down("md")
  );

  const ModalMarginObject = {
    mobile : 30,
    web: 20
  };

  if(checkingModalforSmallerScreens){
    ModalMarginObject.mobile = 20;
    ModalMarginObject.web = 0;
  }


  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      aria-modal="true"
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
        <Box
          sx={{
            ...style,
            mt: platform == "web" ? ModalMarginObject.web : ModalMarginObject.mobile ,
          }}
        >
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
                  <Box key={img} component="div">
                    <img
                      alt="Loading..."
                      src={img}
                      loading="lazy"
                      style={{
                        width:"100%",
                        height: "150%",
                      }}
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
