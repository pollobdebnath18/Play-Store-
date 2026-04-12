import React from "react";
import { useParams } from "react-router";
import useApps from "../../hooks/useApps";
import { HashLoader } from "react-spinners";
import DownloadImg from "../../assets/images/icon-downloads.png";
import RatingImg from "../../assets/images/icon-ratings.png";
import ReveiwImg from "../../assets/images/icon-review.png";
import Chart from "./chart";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  //   console.log(typeof id, apps, loading);

  if (loading) {
    return (
      <>
        <div className="flex justify-center items-center pt-5">
          <HashLoader color="#00D390" />
        </div>
      </>
    );
  }

  const expectedApp = apps.find((app) => app.id === parseInt(id));

  const {
    image,
    title,
    companyName,
    description,
    downloads,
    size,
    reviews,
    ratingAvg,
    ratings,
  } = expectedApp;

  return (
    <div className="max-w-[1200px] mx-auto my-16">
      <div className="flex flex-col md:flex-row items-center gap-4 px-10 py-5">
        <div className="shadow-lg bg-white w-full md:w-[30%] flex justify-center items-center p-6">
          <img className="w-[300px] h-[300px] object-contain" src={image} alt="image" />
        </div>
        <div className="space-y-6 bg-blue-50 w-full md:w-[70%] px-10 py-10 rounded-lg">
          <div>
            <h2 className="text-3xl text-[#001931] font-bold">{title}</h2>
            <p className="text-[#627382] font-semibold">
              Developed by <span className="text-[#632EE3]">{companyName}</span>
            </p>
          </div>
          <span className="border-t "></span>
          <div className="grid grid-cols-3 gap-10 ">
            <div className="space-y-2">
              <img src={DownloadImg} alt="downloads" />
              <div className="flex flex-col">
                <span>Downloads</span>
                <span className="text-2xl text-[#001931] font-bold">{downloads}</span>
              </div>
            </div>
            <div>
                <div>
              <img src={RatingImg} alt="rating" />
              <div className="flex flex-col">
                <span>Average Ratings</span>
                <span className="text-2xl text-[#001931] font-bold">{ratingAvg}</span>
              </div>
            </div>
            </div>
            <div>
                <div>
              <img src={ReveiwImg} alt="reviews" />
              <div className="flex flex-col">
                <span>Total Reviews</span>
                <span className="text-2xl text-[#001931] font-bold">{reviews}</span>
              </div>
            </div>
            </div>
          </div>
          <div>
            <button className="btn text-white bg-[#00D390]">Install Now ({size}MB)</button>
          </div>
        </div>
      </div>
      <div className="border-t py-6"><h2 className="text-xl font-bold ml-10">Ratings</h2></div>
      <Chart ratings={ratings}></Chart>

      <div className="mt-10 py-6">
        <h2 className="text-xl font-bold ml-10">Description</h2>
        <p className="ml-10 pt-5">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
