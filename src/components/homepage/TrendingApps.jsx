import React from "react";
import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import AppCard from "../ui/AppCard";
import { HashLoader } from "react-spinners";
import { Link } from "react-router";
import useApps from "../../hooks/useApps";
// import { useLoaderData } from "react-router";

// const appsPromise = fetch("/data.json").then((res) => res.json());

const TrendingApps = () => {
  const { apps, loading } = useApps();
  console.log(apps, loading);
  return (
    <div className="max-w-[1200px] mx-auto my-16">
      <div className="text-center">
        <h2 className="text-5xl font-bold">Trending Apps</h2>
        <p className="text-[#627382] pt-3">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      {loading ? (
        <div className="flex justify-center items-center pt-5">
          <HashLoader color="#00D390" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 mx-20 md:mx-10 lg:mx-0">
          {apps.slice(0, 9).map((app, idx) => (
            <AppCard key={idx} app={app}></AppCard>
          ))}
        </div>
      )}
      <div className="text-center mt-5 text-white">
        <Link to="/apps">
          <button className="btn bg-gradient-to-l from-[#9F62F2] to-[#632EE3] text-white ">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
