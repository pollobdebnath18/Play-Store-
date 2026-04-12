import React, { createContext, useState } from "react";

export const InstalledAppContext = createContext();

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
