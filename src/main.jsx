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

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        element: <h2>Homepge</h2>,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/Installapps",
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
