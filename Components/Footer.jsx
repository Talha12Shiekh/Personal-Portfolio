import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import {
  ACCENT_COLOR,
  BOXES_COLOR,
  CONTACTS_QUESTIONS,
  ICONS_ARRAY,
  SKILLS,
} from "../Constants";
import { ArrowRightAlt } from "@mui/icons-material";
import { NAVBAR_LINKS } from "./Navbar";
import CustomBubblyLink from "./CustomBubblyLink";

const FooterHeading = ({ text }) => {
  return (
    <Typography variant="h5"  fontWeight="bold" color="white" my={6}>
      {text}
    </Typography>
  );
};

const ContactsLink = ({
  text,
  icon = <ArrowRightAlt sx={{ color: ACCENT_COLOR, fontSize: 30 }} />,
  mt = 1,
  alignItems = "center",
  gap = 1,
  path,
}) => {
  return (
    <Box>
      <CustomBubblyLink to={path}>
        <Box display="flex" gap={gap} alignItems={alignItems} mt={mt}>
          <Box display="flex" justifyContent="center" alignItems="center">
            {icon}
          </Box>
          <Typography textAlign="start" variant="h6" color={BOXES_COLOR}>
            {text}
          </Typography>
        </Box>
      </CustomBubblyLink>
    </Box>
  );
};

const Footer = () => {
  return (
    <Box p={5} component="footer">
      <Grid container>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <FooterHeading text="About" />
          <Typography variant="h6" color={BOXES_COLOR}>
            A passionate frontend developer with 2 years of experience,
            specializing in building customized websites and mobile apps using
            React.js and React Native
          </Typography>
          <Box mt={5}>
            {ICONS_ARRAY.map(({ href, key, icon }) => {
              return (
                <IconButton
                  key={key}
                  target="_blank"
                  variant="text"
                  href={href}
                  className="home_icons"
                  sx={{ mr: 2 }}
                >
                  {icon}
                </IconButton>
              );
            })}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <FooterHeading text="Links" />
          {[{ text: "Home", key: 7, path: "/" }, ...NAVBAR_LINKS].map(
            ({ text, key, path }) => (
              <ContactsLink key={key} text={text} path={path} />
            )
          )}
        </Grid>
        <Grid item  xs={12} sm={6}  md={6} lg={3}>
          <FooterHeading text="Services" />
          {SKILLS.map(({ key, heading, path }) => (
            <ContactsLink key={key} path={path} text={heading} />
          ))}
        </Grid>
        <Grid item  xs={12} sm={6}  md={6} lg={3}>
          <FooterHeading text="Have a Question ?" />
          {CONTACTS_QUESTIONS.map(({ icon, key, text, alignItems,path }) => (
            <ContactsLink
              icon={icon}
              alignItems={alignItems}
              key={key}
              mt={1}
              text={text}
              gap={3}
              path={path}
            />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
