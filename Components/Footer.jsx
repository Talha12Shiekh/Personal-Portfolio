import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import {
  ACCENT_COLOR,
  BOXES_COLOR,
  CONTACTS_QUESTIONS,
  ICONS_ARRAY,
  SKILLS,
} from "../Constants";
import { ArrowRightAlt, LocationOn, Call, Email } from "@mui/icons-material";
import { NAVBAR_LINKS } from "./Navbar";
import { BubblyLink } from "react-bubbly-transitions";
import CustomBubblyLink from "./CustomBubblyLink";

const FooterHeading = ({ text }) => {
  return (
    <Typography variant="h5" fontWeight="bold" color="white" mb={6}>
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
    <Box p={5}>
      <Grid container p={5} justifyContent="space-between" spacing={3}>
        <Grid item lg={3}>
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
        <Grid item lg={3}>
          <FooterHeading text="Links" />
          {[{ text: "Home", key: 7, path: "/" }, ...NAVBAR_LINKS].map(
            ({ text, key, path }) => (
              <ContactsLink key={key} text={text} path={path} />
            )
          )}
        </Grid>
        <Grid item lg={3}>
          <FooterHeading text="Services" />
          {SKILLS.map(({ key, heading, path }) => (
            <ContactsLink key={key} path={path} text={heading} />
          ))}
        </Grid>
        <Grid item lg={3}>
          <FooterHeading text="Have a Question ?" />
          {CONTACTS_QUESTIONS.map(({ icon, key, text, alignItems }) => (
            <ContactsLink
              icon={icon}
              alignItems={alignItems}
              key={key}
              mt={4}
              text={text}
              gap={3}
            />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
