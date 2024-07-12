import Atropos from "atropos/react";
import React, { useState } from "react";
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

const CARD_DESCRIPTION_LIMIT = `Developed a feature-rich calculator app using React Native, designed to perform complex arithmetic calculations with ease. The app o`;
import { GitHub } from "@mui/icons-material";

const ProjectCard = ({image,title,description,codeLink,live,liveDisabled}) => {
  return (
    <Atropos
      shadow={false}
      shadowScale={0}
      highlight={false}
      className="my-atropos"
    >
      <Card
        sx={{
          maxWidth: 345,
          backgroundColor: BOXES_COLOR,
          padding: 2,
          marginTop: 4,
        }}
        className="projectsCard"
      >
        <CardMedia data-atropos-offset="5" sx={{ height: 200, marginBottom: 4 }} image={image}>
        </CardMedia>
        <CardContent style={{ padding: 0 }}>
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
            {description.length > CARD_DESCRIPTION_LIMIT.length ?  `${description.substring(0, CARD_DESCRIPTION_LIMIT.length)}   ...` : description}
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
            disabled={liveDisabled}
          >
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
