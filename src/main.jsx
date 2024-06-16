import React, { lazy } from "react";
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
const BannerAndContact = lazy(() =>
  import("../Components/BannerAndContact.jsx")
);

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
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: "/",
        element: (
          <>
            <Home />
            <About />
            <Skills />
            <Services/>
          </>
        ),
      },
      {
        path: "about",
        element: (
          <BannerAndContact>
            <About />
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
