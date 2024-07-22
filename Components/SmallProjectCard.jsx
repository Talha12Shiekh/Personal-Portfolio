import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@mui/material";
import image from "/WhatsappCloneTitleImage.png";
import { ACCENT_COLOR, BOXES_COLOR, DOWNLOAD_BUTTON_COLOR } from "../Constants";
import "../src/index.css";
import { motion } from "framer-motion";

export default function SmallProjectCard() {
  return (
    <motion.div layout>
      <Card className="sm_project_card" sx={{ maxWidth: 345, p: 2, bgcolor: BOXES_COLOR }}>
        <Box height={200} width="100%" overflow="hidden">
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            image={image}
            sx={{ borderRadius: 2 }}
            className="sm_project_image"
          />
        </Box>
        <CardContent sx={{ p: 0, mt: 3 }}>
          <Typography
            gutterBottom
            color={"white"}
            fontWeight={"bold"}
            variant="h5"
            component="div"
          >
            Todo List
          </Typography>
        </CardContent>
        <CardActions sx={{ p: 0, display: "flex", justifyContent: "flex-end" }}>
          <Button
            sx={{ bgcolor: DOWNLOAD_BUTTON_COLOR, color: ACCENT_COLOR }}
            variant="outlined"
            size="large"
          >
            Download
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
}
