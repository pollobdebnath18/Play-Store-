import React from "react";
import TrendingApps from "../../components/homepage/TrendingApps";
import Stats from "../../components/homepage/Stats";
import BannerPage from "../../components/homepage/BannerPage";


const HomePage = () => {
  return (
    <div className="">
      <BannerPage></BannerPage>
      <Stats></Stats>
      <TrendingApps></TrendingApps>
    </div>
  );
};

export default HomePage;
