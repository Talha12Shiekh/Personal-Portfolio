import { styled, TextField } from "@mui/material";
import React from "react";
import { ACCENT_COLOR, BOXES_COLOR } from "../Constants";

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: BOXES_COLOR,
    },
    "&:hover fieldset": {
      borderColor: ACCENT_COLOR,
    },
    "&.Mui-focused fieldset": {
      borderColor: ACCENT_COLOR,
    },
  },
  "& .MuiOutlinedInput-input": {
    color: "white",
  },
  "& .MuiInputLabel-root": {
    color: ACCENT_COLOR,
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: ACCENT_COLOR,
  },
});

export const CustomTextInput = ({ label, value, onChange, type, ...rest }) => {
  return (
    <StyledTextField
      variant="outlined"
      margin="normal"
      fullWidth
      id={type}
      label={label}
      name={type}
      value={value}
      onChange={onChange}
      autoComplete={type}
      autoFocus
      {...rest}
    />
  );
};
