import {
  Box,
  Button,
  Container,
  IconButton,
  Typography,
  SwipeableDrawer,
  ListItem,
  List,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { ACCENT_COLOR, BACKGROUND_COLOR } from "../Constants";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CustomBubblyLink from "./CustomBubblyLink";
import "../src/index.css"

export const NAVBAR_HEIGHT = "15vh";

export const NAVBAR_LINKS = [
  {
    text: "Skills",
    key: 2,
    path: "/skills",
  },
  {
    text: "Experience",
    key: 3,
    path: "/experience",
  },
  {
    text: "Projects",
    key: 4,
    path: "/projects",
  },
  {
    text: "Education",
    key: 5,
    path: "/education",
  },
  {
    text: "Services",
    key: 6,
    path: "/services",
  },
  {
    text: "Contacts",
    key: 1,
    path: "/contacts",
  },
];

const GithubButton = () => {
  return (
    <Button
      target="_blank"
      href="https://github.com/Talha12Shiekh"
      style={{
        borderRadius: 50,
        color: ACCENT_COLOR,
        borderWidth: 2,
      }}
      variant="outlined"
    >
      <Typography variant="h6" textTransform={"capitalize"}>
        Github Profile
      </Typography>
    </Button>
  );
};

const Navbar = () => {
  const [openDrawer, setopenDrawer] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  const checkMobile = useMediaQuery(theme.breakpoints.down("md"));
  const checkingWidthContainer = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <SwipeableDrawer
        onOpen={() => setopenDrawer(true)}
        PaperProps={{
          sx: {
            backgroundColor: "rgba(0,0,0,.5)",
            width: "100vw",
            position:'relative'
          },
        }}
        open={openDrawer}
        onClose={() => setopenDrawer(false)}
      >
        <IconButton
          onClick={() => setopenDrawer((p) => !p)}
          color="info"
          size="large"
        >
          <Typography position={"absolute"} top={30} right={30}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.5em"
              height="2.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
              ></path>
            </svg>
          </Typography>
        </IconButton>
        <Box padding={5} mt={5} height="100%">
          {NAVBAR_LINKS.map(({ text, key,path }) => {
            return (
              <List className="drawer_text" key={key} sx={{mt:3}}>
                <ListItem
                  sx={() => ({
                    "& .MuiTouchRipple-child": {
                      backgroundColor: `white !important`,
                    },
                  })}
                  key={text}
                  disablePadding
                >
                  <CustomBubblyLink  to={path}>
                    <div onClick={() => setopenDrawer(false)}>
                    <ListItemText>
                      <Typography color={"white"} variant="h4">
                        {text}
                      </Typography>
                    </ListItemText>
                    </div>
                  </CustomBubblyLink>
                </ListItem>
              </List>
            );
          })}
          <List sx={{mt:3}}>
            <GithubButton />
          </List>
        </Box>
      </SwipeableDrawer>
      <Box width="100%" bgcolor={BACKGROUND_COLOR}>
        <Container
          maxWidth={checkingWidthContainer ? "sm" : "lg"}
          sx={{ height: "100%", paddingInline:2 }}
          component={"section"}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"100%"}
            height={NAVBAR_HEIGHT}
            component="header"
          >
            <Box component={"nav"}>
              <CustomBubblyLink to={"/"}>
                <Typography
                  style={{ cursor: "pointer" }}
                  fontWeight={"bold"}
                  color={"white"}
                  variant={checkMobile ? "h5" : "h4"}
                >
                  {"<Talha Khurram />"}
                </Typography>
              </CustomBubblyLink>
            </Box>
            {matches ? (
              <>
                <Box className="navbar_links" display="flex" gap={4} component={"nav"}>
                  {NAVBAR_LINKS.map(({ text, key, path }) => {
                    return (
                        <CustomBubblyLink key={key} to={path}
                        >
                          <Typography
                            color={"white"}
                            fontWeight={500}
                            variant="subtitle1"
                            textTransform={"capitalize"}
                          >
                            {text}
                          </Typography>
                        </CustomBubblyLink>
                    );
                  })}
                </Box>
                <Box component={"div"}>
                  <GithubButton />
                </Box>{" "}
              </>
            ) : (
              <Box display="flex" justifyContent="center" alignItems="center">
                <IconButton
                  onClick={() => setopenDrawer(true)}
                  color="info"
                  size={checkMobile ? "small" : "large"}
                  aria-hidden="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      fill="white"
                      d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8m0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8m0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8"
                    ></path>
                  </svg>
                </IconButton>
              </Box>
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
