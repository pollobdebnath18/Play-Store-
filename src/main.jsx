import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import Root from "./layout/Root.jsx";
import Apps from "./pages/apps/Apps.jsx";
import InstallApps from "./pages/installApps/InstallApps.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import HomePage from "./pages/homepage/HomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/installapps",
        Component: InstallApps,
      },
     
    ],
    errorElement: <NotFoundPage></NotFoundPage>
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
