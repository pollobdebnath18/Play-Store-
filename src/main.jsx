import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router/dom";
import { router } from "./routes/Routes.jsx";
import InstalledAppProvider from "./context/InstalledAppProvider.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InstalledAppProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </InstalledAppProvider>
  </StrictMode>,
);
