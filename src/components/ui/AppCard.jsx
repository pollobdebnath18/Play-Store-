import React from "react";
import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const AppCard = ({ app }) => {
  return (
    <div className="card bg-base-100 shadow-sm pt-5 ">
      <figure>
        <img src={app.image} className="h-[200px] w-auto" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{app.title}</h2>
        <div className="flex justify-between items-center ">
          <span className="flex items-center gap-1 text-[#00D390] bg-[#F1F5E8] px-2 py-1">
            <FiDownload></FiDownload> {app.downloads}
          </span>
          <span className="flex items-center gap-1 text-[#FF8811] bg-[#FFF0E1] px-2 py-1">
            <FaStar></FaStar> {app.ratingAvg}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
