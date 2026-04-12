import React, { useContext } from "react";
import { InstalledAppContext } from "../../context/InstalledAppProvider";
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import NotInstallAppPage from "./NotInstallAppPage";

const InstallAppsPage = () => {
  const { installApps, setInstallApps } = useContext(InstalledAppContext);
  console.log(installApps);
  const handleUnstallApp = (app) => {
    const remApp = installApps.filter((ip) => ip.id !== app.id);
    setInstallApps(remApp);
    toast.error(`${app.title} is Unstalled`);
  };
  return (
    <div className="max-w-[1000px] mx-auto my-16">
      {installApps.length > 0 && (
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Your Installed Apps</h2>
          <p className="text-[#627382] pt-3">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
      )}
      <div className="">
        {installApps.length === 0 ? (
          <NotInstallAppPage></NotInstallAppPage>
        ) : (
          installApps.map((app, idx) => {
            return (
              <div
                key={idx}
                className="flex justify-between items-center shadow-sm bg-gray-100 px-8 py-3 rounded-xl mb-7"
              >
                <div className="flex justify-between items-center gap-3">
                  <div>
                    <img
                      className=" h-[70px] rounded-xl"
                      src={app?.image}
                      alt="image"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <h2 className="text-xl text-[#001931] font-semibold">
                      {app.title}
                    </h2>
                    <div className="flex items-center gap-2">
                      <span className=" text-[13px] flex items-center gap-1 text-[#00D390]  px-1 py-1">
                        <FiDownload></FiDownload> {app.downloads}
                      </span>
                      <span className="text-[13px] flex items-center gap-1 text-[#FF8811]  px-1 py-1">
                        <FaStar></FaStar> {app.ratingAvg}
                      </span>
                      <span className="text-[13px]">{app.size} MB</span>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleUnstallApp(app)}
                    className="btn bg-[#00D390] text-white"
                  >
                    UnInstall
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default InstallAppsPage;
