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
import { ACCENT_COLOR, BOXES_COLOR, DOWNLOAD_BUTTON_COLOR } from "../Constants";
import "../src/index.css";
import { motion } from "framer-motion";

export default function SmallProjectCard({title,downloadFile,projectImage}) {
  return (
    <motion.div layout>
      <Card className="sm_project_card" sx={{ maxWidth: 345, p: 2, bgcolor: BOXES_COLOR }}>
        <Box height={200} width={300} overflow="hidden" >
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            image={projectImage}
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
            {title}
          </Typography>
        </CardContent>
        <CardActions sx={{ p: 0, display: "flex", justifyContent: "flex-end" }}>
          <Button
            download
            href={downloadFile}
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
