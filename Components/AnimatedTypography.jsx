import { Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion"

const AnimatedTypography = React.forwardRef((props, ref) => {
    const { offset = 100, ...rest } = props;
    return (
      <motion.div
        initial={{ x: offset }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography ref={ref} {...rest} />
      </motion.div>
    );
  });
  
  export default AnimatedTypography;