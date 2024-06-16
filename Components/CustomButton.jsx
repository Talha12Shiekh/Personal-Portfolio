import { Typography, Button } from "@mui/material";
import {useState} from "react";
import {ACCENT_COLOR} from "../Constants"

const CustomButton = ({href,onClick,children}) => {
  const [buttonScale, setButtonScale] = useState(1);
  return (
    <Button
      onMouseOver={() => setButtonScale(1.2)}
      onMouseLeave={() => setButtonScale(1)}
      target="_blank"
      href={href}
      onClick={onClick}
      style={{
        backgroundColor: ACCENT_COLOR,
        borderRadius: 10,
        paddingInline: 40,
        boxShadow: "3px 3px 15px rgb(5, 196, 188)",
        transform: `scale(${buttonScale})`,
        transition: "all 0.5s linear",
      }}
      variant="contained"
    >
        {children}
    </Button>
  );
};

export default CustomButton;
