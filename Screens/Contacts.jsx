import {
  Box,
  Container,
  Grid,
  TextField,
  Typography,
  FormControl,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { CONTACTS_INFORMATION } from "../Constants";
import ContactsInformationComponent from "../Components/ContactsInformationComponent";
import "../src/index.css";
import { CustomTextInput } from "../Components/CustomTextInput";
import CustomButton from "../Components/CustomButton";
import { useTheme } from "@mui/material/styles";
import { useForm, ValidationError } from "@formspree/react";
import HeadingAndDescription from "../Components/HeadingAndDescription";
import { center } from "../Helpers";

const Contacts = () => {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  const [state, handleSubmit] = useForm("movajgev");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  function handleChange(e) {
    setInputValues((prev) => {
      return {
        ...prev,
        [e.target.name]: [e.target.value],
      };
    });
  }

  return (
    <>
      <Container
        maxWidth={"xl"}
        sx={{ padding: "0 !important" }}
        component={"section"}
      >
        <HeadingAndDescription
          heading={"Contact"}
          description={
            "Feel free to contact to me for any questions or opportunities!"
          }
        />
        <Box {...center}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27225.328237875936!2d74.25636258697475!3d31.46461865700412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919015f82b0b86f%3A0x2fcaf9fdeb3d02e6!2sJohar%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1722003047185!5m2!1sen!2s"
            width="95%"
            height="500"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
        <Box width={"100%"}>
          <Grid container p={5} justifyContent="space-between" spacing={2}>
            <Grid
              item
              display={"flex"}
              flexDirection={"column"}
              gap={5}
              xs={10}
              md={10}
              lg={4}
            >
              {CONTACTS_INFORMATION.map(({ icon, text, key }) => {
                return (
                  <ContactsInformationComponent
                    key={key}
                    icon={icon}
                    text={text}
                  />
                );
              })}
            </Grid>
            <Grid item xs={10} md={10} lg={4}>
              <form
                method="POST"
                action="https://formspree.io/f/movajgev"
                onSubmit={handleSubmit}
              >
                <CustomTextInput
                  label="Your Name"
                  value={inputValues.name}
                  onChange={handleChange}
                  type="name"
                />
                <ValidationError
                  prefix="name"
                  field="name"
                  errors={state.errors}
                />
                <CustomTextInput
                  onChange={handleChange}
                  value={inputValues.email}
                  label="Your Email"
                  type="email"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <CustomTextInput
                  onChange={handleChange}
                  value={inputValues.subject}
                  label="Subject"
                  type="subject"
                />
                <ValidationError
                  prefix="Subject"
                  field="subject"
                  errors={state.errors}
                />
              </form>
            </Grid>
            <Grid item xs={10} md={10} lg={4}>
              <form
                method="POST"
                action="https://formspree.io/f/movajgev"
                onSubmit={handleSubmit}
              >
                <CustomTextInput
                  label="Message"
                  type="message"
                  multiline
                  rows={8}
                  defaultValue="Enter Message"
                  value={inputValues.message}
                  onChange={handleChange}
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </form>
            </Grid>
            <Box
              width="100%"
              mt={3}
              display="flex"
              justifyContent={matches ? "flex-start" : "flex-end"}
            >
              <form
                method="POST"
                action="https://formspree.io/f/movajgev"
                onSubmit={handleSubmit}
              >
                <CustomButton type="submit">
                  <Typography
                    textTransform="capitalize"
                    fontSize={23}
                    fontWeight="bold"
                    color="white"
                  >
                    Send Message
                  </Typography>
                </CustomButton>
              </form>
            </Box>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Contacts;
