import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import HomePage from "../pages/homepage/HomePage";
import Apps from "../pages/apps/Apps";
import InstallApps from "../pages/installApps/InstallApps";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import AppDetails from "../pages/appDetails/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
        // loader:()=>fetch('/data.json')
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/installapps",
        Component: InstallApps,
      },
      {
        path:'/apps/:id',
        Component: AppDetails
      }
     
    ],
    errorElement: <NotFoundPage></NotFoundPage>
  },
]);