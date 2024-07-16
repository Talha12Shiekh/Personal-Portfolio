import {
  Box,
  Button,
  Container,
  IconButton,
  Typography,
  SwipeableDrawer,
  ListItem,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { ACCENT_COLOR, BACKGROUND_COLOR } from "../Constants";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CustomBubblyLink from "./CustomBubblyLink";

export const NAVBAR_HEIGHT = "15vh";

const NAVBAR_LINKS = [
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
  const checkingWidthContainer = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <SwipeableDrawer
        onOpen={() => setopenDrawer(true)}
        PaperProps={{
          sx: {
            backgroundColor: "rgba(0,0,0,.5)",
            width: innerWidth,
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
          <Typography marginLeft={45} marginTop={5}>
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
        <Box padding={5} height="100%">
          {NAVBAR_LINKS.map(({ text, key,path }) => {
            return (
              <List key={key}>
                <ListItem
                  sx={(theme) => ({
                    "& .MuiTouchRipple-child": {
                      backgroundColor: `white !important`,
                    },
                  })}
                  key={text}
                  disablePadding
                >
                  <ListItemButton onClick={() => setopenDrawer(false)}>
                  <CustomBubblyLink to={path}>
                    <ListItemText>
                      <Typography color={"white"} variant="h4">
                        {text}
                      </Typography>
                    </ListItemText>
                  </CustomBubblyLink>
                  </ListItemButton>
                </ListItem>
              </List>
            );
          })}
          <List>
            <GithubButton />
          </List>
        </Box>
      </SwipeableDrawer>
      <Box width="100%" bgcolor={BACKGROUND_COLOR}>
        <Container
          maxWidth={checkingWidthContainer ? "sm" : "lg"}
          sx={{ height: "100%", padding: "0 !important" }}
          component={"section"}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"100%"}
            height={NAVBAR_HEIGHT}
          >
            <Box component={"div"}>
              <CustomBubblyLink to={"/"}>
                <Typography
                  style={{ cursor: "pointer" }}
                  fontWeight={"bold"}
                  color={"white"}
                  variant="h4"
                >
                  {"<Talha Khurram />"}
                </Typography>
              </CustomBubblyLink>
            </Box>
            {matches ? (
              <>
                <Box display="flex" gap={2} component={"div"}>
                  {NAVBAR_LINKS.map(({ text, key, path }) => {
                    return (
                      <Button variant="text" key={key}>
                        <CustomBubblyLink to={path}>
                          <Typography
                            color={"white"}
                            fontWeight={500}
                            // fontSize={18}
                            variant="subtitle1"
                            textTransform={"capitalize"}
                          >
                            {text}
                          </Typography>
                        </CustomBubblyLink>
                      </Button>
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
                  size="large"
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
