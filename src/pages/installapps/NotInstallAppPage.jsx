import React from "react";
import { FaRegSadTear } from "react-icons/fa";
import { MdOutlineInstallMobile } from "react-icons/md";
import { Link } from "react-router";

const NotInstallAppPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      {/* Modern Icon */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
        alt="No apps"
        className="w-[140px] mb-6 opacity-80"
      />

      {/* Heading */}
      <h2 className="text-3xl font-bold text-[#001931]">
        No Installed Apps Found
      </h2>

      {/* Description */}
      <p className="text-[#627382] mt-3 max-w-md">
        You haven’t installed any apps yet. Explore apps and install your
        favorite ones to see them here.
      </p>

      {/* Button */}
      <Link
        to="/apps"
        className="mt-6 bg-[#00D390] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#00b77a] transition"
      >
        Explore Apps
      </Link>
    </div>
  );
};

export default NotInstallAppPage;
