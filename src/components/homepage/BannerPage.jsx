import React from "react";
import BannerImg from '../../assets/images/hero.png'
import { FaAppStore, FaAppStoreIos, FaGooglePlay } from "react-icons/fa";

const BannerPage = () => {
  return (
    <div className="min-h-[80vh] max-w-[1200px] mx-auto ">
      <div className="text-center pt-10 space-y-4">
        <h1 className="text-6xl font-bold w-[50%] mx-auto">
          We Build <br /><span className="text-[#9F62F2]">Productive</span> Apps
        </h1>
        <p className="text-[#627382] w-[60%] mx-auto">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="">
            <button className="btn mr-3"><FaGooglePlay></FaGooglePlay> Google Play</button>
            <button className="btn"><FaAppStoreIos></FaAppStoreIos> App Store</button>
        </div>
        <div>
            <img className="mx-auto w-full max-w-[700px] max-h[450px]" src={BannerImg} alt="BannerImg" />
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
