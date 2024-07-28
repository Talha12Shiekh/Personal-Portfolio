import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { lazy, Suspense, useRef, useState } from "react";
import { CONTACTS_INFORMATION } from "../Constants";
const ContactsInformationComponent = lazy(() =>
  import("../Components/ContactsInformationComponent")
);
import "../src/index.css";
import { CustomTextInput } from "../Components/CustomTextInput";
import CustomButton from "../Components/CustomButton";
import { useTheme } from "@mui/material/styles";
import { useForm, ValidationError } from "@formspree/react";
const HeadingAndDescription = lazy(() =>
  import("../Components/HeadingAndDescription")
);
import "../src/index.css";
import Loading from "./Loading";

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

  const formSubmitButtonRef = useRef(null);

  return (
    <>
      <form
        className="hidden_form"
        method="POST"
        action="https://formspree.io/f/movajgev"
        onSubmit={() => {
          handleSubmit();
        }}
      >
        <input name="name" readOnly value={inputValues.name} type="text" />
        <input name="email" readOnly value={inputValues.email} type="text" />
        <input name="subject" readOnly value={inputValues.subject} type="text" />
        <input name="message" readOnly value={inputValues.message} type="text" />
        <button ref={formSubmitButtonRef} type="submit" />
      </form>
      <Container
        maxWidth={"xl"}
        sx={{ padding: "0 !important" }}
        component={"section"}
      >
        <Suspense fallback={<Loading />}>
          <HeadingAndDescription
            heading={"Contact"}
            description={
              "Feel free to contact to me for any questions or opportunities!"
            }
          />
        </Suspense>

        <Box>
          <Suspense fallback={<Loading/>}>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.874840291217!2d74.27188582469432!3d31.4726289495008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903d0ef51e8e9%3A0xfe7725b94cf22d2a!2sBlock%20G3%20Block%20G%203%20Phase%202%20Johar%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1722081869408!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          </Suspense>

        </Box>
        <Box width={"100%"}>
          <Grid
            container
            p={matches ? 0 : 5}
            my={5}
            justifyContent={matches ? "center" : "space-between"}
            spacing={2}
          >
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
                  <Suspense key={key} fallback={<Loading />}>
                    <ContactsInformationComponent
                      icon={icon}
                      text={text}
                    />
                  </Suspense>
                );
              })}
            </Grid>
            <Grid item xs={10} md={10} lg={4}>
              <form>
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
              <CustomTextInput
                label="Message"
                type="message"
                multiline
                rows={8}
                value={inputValues.message}
                onChange={handleChange}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <Box mt={2} textAlign={"right"}>
                <CustomButton
                  onClick={() => formSubmitButtonRef.current.click()}
                >
                  <Typography
                    textTransform="capitalize"
                    fontSize={23}
                    fontWeight="bold"
                    color="white"
                  >
                    Send Message
                  </Typography>
                </CustomButton>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Contacts;
