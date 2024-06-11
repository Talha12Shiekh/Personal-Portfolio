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

const NAVBAR_LINKS = [
  {
    text: "About",
    key: 1,
    onClick: () => {},
  },
  {
    text: "Skills",
    key: 2,
    onClick: () => {},
  },
  {
    text: "Experience",
    key: 3,
    onClick: () => {},
  },
  {
    text: "Projects",
    key: 4,
    onClick: () => {},
  },
  {
    text: "Education",
    key: 5,
    onClick: () => {},
  },
];

const GithubButton = () => {
  return (
    <Button
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
    <Box height={"100vh"} component={"section"} bgcolor={BACKGROUND_COLOR}>
      <SwipeableDrawer PaperProps={{
        sx:{
            backgroundColor:'rgba(0,0,0,.5)'
        }
      }} open={openDrawer} onClose={() => setopenDrawer(false)}>
            <IconButton
            
                onClick={() => setopenDrawer(p => !p)}
                color="info"
                size="large"
              >
                <Typography marginLeft={45} marginTop={5}>
                <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="white" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"></path></svg>
                </Typography>
            </IconButton>
        <Box padding={5} height="100%">
            {NAVBAR_LINKS.map(({ text, key }, index) => {
                return (
                  <List>
                <ListItem
                 sx={(theme) => ({
                    "& .MuiTouchRipple-child": {
                      backgroundColor: `white !important`,
                    },
                  })}
                key={text} disablePadding>
                  <ListItemButton>
                    <ListItemText>
                        <Typography color={"white"} variant="h4">
                            {text}
                        </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
          </List>
              );
            })}
            <List>

            <GithubButton/>
            </List>
            
        </Box>
      </SwipeableDrawer>
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
          height={"15vh"}
        >
          <Box component={"div"}>
            <Typography fontWeight={"bold"} color={"white"} variant="h4">
              {"<Talha Khurram />"}
            </Typography>
          </Box>
          {matches ? (
            <>
              <Box display="flex" gap={5} component={"div"}>
                {NAVBAR_LINKS.map(({ text, key }) => {
                  return (
                    <Button variant="text" key={key}>
                      <Typography
                        color={"white"}
                        fontWeight={500}
                        fontSize={18}
                        variant="subtitle1"
                        textTransform={"capitalize"}
                      >
                        {text}
                      </Typography>
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
  );
};

export default Navbar;
