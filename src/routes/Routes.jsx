import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import HomePage from "../pages/homepage/HomePage";
import Apps from "../pages/apps/Apps";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import AppDetails from "../pages/appDetails/AppDetails";
import InstallAppsPage from "../pages/installapps/InstallAppsPage";
import Dashboard from "../pages/dashboard/Dashboard";

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
        Component: InstallAppsPage,
      },
      {
        path: "/apps/:id",
        Component: AppDetails,
      },
      {
        path:'/dashboard',
        Component: Dashboard
      }
    ],
    errorElement: <NotFoundPage></NotFoundPage>,
  },
]);
