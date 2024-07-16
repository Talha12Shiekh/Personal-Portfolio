import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const Home = lazy(() => import("../Screens/Home"));
const About = lazy(() => import("../Screens/About"));
const Skills = lazy(() => import("../Screens/Skills"));
const Services = lazy(() => import("../Screens/Services"));
const Experience = lazy(() => import("../Screens/Experience"));
const Education = lazy(() => import("../Screens/Education"));
const Projects = lazy(() => import("../Screens/Projects"));
const BannerAndContact = lazy(() =>
  import("../Components/BannerAndContact.jsx")
);
import 'atropos/css'
import Loading from "../Screens/Loading";

let theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
});
theme = responsiveFontSizes(theme);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>😂😂😂</h1>,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading/>}>
            <Home />
            <Skills />
            <Services />
            <Experience />
            <Education />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Loading/>}>
            <BannerAndContact>
              <About />
            </BannerAndContact>
          </Suspense>
        ),
      },
      {
        path: "skills",
        element: (
          <Suspense fallback={<Loading/>}>
            <BannerAndContact>
              <Skills />
            </BannerAndContact>
          </Suspense>
        ),
      },
      {
        path: "experience",
        element: (
          <Suspense fallback={<Loading/>}>
            <BannerAndContact>
              <Experience />
            </BannerAndContact>
          </Suspense>
        ),
      },
      {
        path: "services",
        element: (
          <Suspense fallback={<Loading/>}>
            <BannerAndContact>
              <Services />
            </BannerAndContact>
          </Suspense>
        ),
      },
      {
        path: "education",
        element: (
          <Suspense fallback={<Loading/>}>
            <BannerAndContact>
              <Education />
            </BannerAndContact>
          </Suspense>
        ),
      },
      {
        path: "projects",
        element: (
          <Suspense fallback={<Loading/>}>
            <BannerAndContact>
              <Projects />
            </BannerAndContact>
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
