import { Box, Tab, Tabs, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { ACCENT_COLOR } from "../Constants";
import { motion } from "framer-motion";

export const ReusableTabs = ({ value, handleChange, TABS_CONTENT }) => {
  const theme = useTheme();
  const checkTabs = useMediaQuery(theme.breakpoints.down("md"));
  return (
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
        aria-label="My Projects"
        orientation={checkTabs ? "vertical" : "horizontal"}
      >
        {TABS_CONTENT.map(({ title, value, key }) => {
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
  );
};

export const AnimatedGrid = ({ children,gap }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <motion.div
      layout
      style={{
        display: "flex",
        justifyContent: matches ? "center" : "flex-start",
        flexWrap: "wrap",
        gap,
        marginTop: 30,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ReusableTabs;
