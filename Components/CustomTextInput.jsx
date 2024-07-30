import { styled, TextField } from "@mui/material";
import React from "react";
import { ACCENT_COLOR, BACKGROUND_COLOR, BOXES_COLOR } from "../Constants";

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    backgroundColor: BACKGROUND_COLOR,
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
    "&:-webkit-autofill": {
      WebkitBoxShadow: `0 0 0 100px ${BACKGROUND_COLOR} inset`,
      WebkitTextFillColor: "white",
    },
    "&:-webkit-autofill:focus": {
      WebkitBoxShadow: `0 0 0 100px ${BACKGROUND_COLOR} inset`,
      WebkitTextFillColor: "white",
    },
    "&:-webkit-autofill:hover": {
      WebkitBoxShadow: `0 0 0 100px ${BACKGROUND_COLOR} inset`,
      WebkitTextFillColor: "white",
    },
    "&:-webkit-autofill:active": {
      WebkitBoxShadow: `0 0 0 100px ${BACKGROUND_COLOR} inset`,
      WebkitTextFillColor: "white",
    },
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
      {...rest}
    />
  );
};
