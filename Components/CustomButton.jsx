import { Button } from "@mui/material";
import { ACCENT_COLOR } from "../Constants";
import "../src/index.css";

const CustomButton = ({ href, onClick, children,...rest }) => {
  return (
    <Button
      target="_blank"
      href={href}
      onClick={onClick}
      className="customButton"
      style={{
        backgroundColor: ACCENT_COLOR,
      }}
      variant="contained"
      {...rest}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
