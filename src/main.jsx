import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import 'animate.css';
import "./index.css";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const Home = lazy(() => import("../Screens/Home"));
const Skills = lazy(() => import("../Screens/Skills"));
const Services = lazy(() => import("../Screens/Services"));
const Experience = lazy(() => import("../Screens/Experience"));
const Education = lazy(() => import("../Screens/Education"));
const Projects = lazy(() => import("../Screens/Projects"));
const Contacts = lazy(() => import("../Screens/Contacts"));
const Certificates = lazy(() => import("../Screens/Certificates"));
import 'atropos/css'
import Loading from "../Screens/Loading";
import BannerAndContact from "../Components/BannerAndContact.jsx";
const BigProjects = lazy(() => import("../Components/BigProjects.jsx"))

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
            <BigProjects />
            <Contacts/>
          </Suspense>
        ),
      },
      {
        path: "contacts",
        element: (
            <BannerAndContact>
              <Contacts/>
            </BannerAndContact>
        ),
      },
      {
        path: "skills",
        element: (
            <BannerAndContact>
              <Skills />
            </BannerAndContact>
        ),
      },
      {
        path: "experience",
        element: (
            <BannerAndContact>
              <Experience />
            </BannerAndContact>
        ),
      },
      {
        path: "services",
        element: (
            <BannerAndContact>
              <Services />
            </BannerAndContact>
        ),
      },
      {
        path: "education",
        element: (
            <BannerAndContact>
              <Education />
            </BannerAndContact>
        ),
      },
      {
        path: "projects",
        element: (
            <BannerAndContact>
              <Projects />
            </BannerAndContact>
        ),
      },
      {
        path: "certificates",
        element: (
            <BannerAndContact>
              <Certificates />
            </BannerAndContact>
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
