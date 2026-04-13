import React, { useState } from "react";
import { InstalledAppContext } from "./InstalledAppContext";

const InstalledAppProvider = ({ children }) => {
  const [installApps, setInstallApps] = useState([]);
  const data = { installApps, setInstallApps };
  return (
    <InstalledAppContext.Provider value={data}>
      {children}
    </InstalledAppContext.Provider>
  );
};

export default InstalledAppProvider;
