import React from "react";
import useApps from "../../hooks/useApps";
import { HashLoader } from "react-spinners";
import AppCard from "../../components/ui/AppCard";
import { Link } from "react-router";

const Apps = () => {
  const { apps, loading } = useApps();
  console.log(apps, loading);
  return (
    <div className="max-w-[1200px] mx-auto my-16">
      <div className="text-center">
        <h2 className="text-5xl font-bold">Our All Applications</h2>
        <p className="text-[#627382] pt-3">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      {loading ? (
        <div className="flex justify-center items-center pt-5">
          <HashLoader color="#00D390" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 mx-20 md:mx-10 lg:mx-0">
          {apps.map((app, idx) => (
            <AppCard key={idx} app={app}></AppCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
