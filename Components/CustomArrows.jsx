import React from 'react';
import { IconButton } from '@mui/material';
import { ArrowForwardIos,ArrowBackIos } from '@mui/icons-material';

export const CustomNextArrow = ({ onClick, hasNext }) => {
  return (
    <IconButton
      onClick={onClick}
      disabled={!hasNext}
      sx={{
        position: 'absolute',
        right: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
      }}
    >
      <ArrowForwardIos />
    </IconButton>
  );
};
export const CustomPrevArrow = ({ onClick, hasNext }) => {
  return (
    <IconButton
      onClick={onClick}
      disabled={!hasNext}
      sx={{
        position: 'absolute',
        left: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
      }}
    >
      <ArrowBackIos />
    </IconButton>
  );
};

