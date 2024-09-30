import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
  IconButton,
} from "@mui/material";
import { BOXES_COLOR, ACCENT_COLOR } from "../Constants";
import { useEffect, useRef, useState } from "react";
import { AttachFile as AttachFileIcon } from "@mui/icons-material";
import OfferLetterViewModal from "./OfferLetterViewModal";

const ExpAndEducationComp = ({
  icon,
  title,
  subtitle,
  description,
  date,
  attachment,
  type,
}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  const checkingSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const dateRef = useRef(null);
  const titleRef = useRef(null);
  const SubtitleRef = useRef(null);

  const checkingEducationComp = type === "education";


  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            "animate__animated",
            "animate__fadeInDown"
          );
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.4,
    });

    if (dateRef.current) observer.observe(dateRef.current);
    if (titleRef.current) observer.observe(titleRef.current);
    if (SubtitleRef.current) observer.observe(SubtitleRef.current);

    return () => {
      if (dateRef.current) observer.unobserve(dateRef.current);
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (SubtitleRef.current) observer.unobserve(SubtitleRef.current);
    };
  }, []);

  const [open, setopen] = useState(false);

  function toggleOpen() {
    setopen((p) => !p);
  }

  return (
    <>
      <OfferLetterViewModal
        open={open}
        handleClose={toggleOpen}
        letter={attachment}
      />
      <Box display="flex" gap={10} my={10}>
        {matches && <Box ml={2}>{icon}</Box>}
        <Box overflow="hidden">
          <Box>
            <Typography
              ref={dateRef}
              ml={4}
              color={ACCENT_COLOR}
              fontWeight="bold"
              variant={"h6"}
            >
              {date}
            </Typography>
            <Typography
              ref={titleRef}
              ml={4}
              my={3}
              color={"white"}
              fontWeight="bold"
              variant={checkingSmDown ? "h5" : "h4"}
            >
              {title}
            </Typography>
            <Typography
              ref={SubtitleRef}
              ml={4}
              my={3}
              color={"white"}
              fontWeight="bold"
              variant="h5"
            >
              {subtitle}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ wordBreak: "break-word" }}
              ml={4}
              my={3}
              color={BOXES_COLOR}
              variant="h6"
            >
              {description}
            </Typography>
          </Box>
          {!checkingEducationComp && <Box textAlign="right" mr={3}>
            <Button variant="text" onClick={toggleOpen}>
              <IconButton>
                <AttachFileIcon sx={{ color: ACCENT_COLOR }} />
              </IconButton>
              <Typography
                variant="body1"
                textTransform="capitalize"
                color={ACCENT_COLOR}
              >
                Attachment
              </Typography>
            </Button>
          </Box>}
        </Box>
      </Box>
    </>
  );
};

export default ExpAndEducationComp;
