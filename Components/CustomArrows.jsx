import React from 'react';
import { IconButton } from '@mui/material';
import { ArrowForwardIos,ArrowBackIos } from '@mui/icons-material';

export const CustomArrow = ({direction, onClick, hasNext }) => {
  const isNext = direction == "next";
  const Icon = isNext ? <ArrowForwardIos />  : <ArrowBackIos />;

  const styles = {
    right:isNext?"10px":"auto",
    left:isNext?"auto":"10px",
  }

  return (
    <IconButton
      onClick={onClick}
      disabled={!hasNext}
      sx={{
        ...styles,
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
      }}
    >
      {Icon}
    </IconButton>
  );
};

