import React from "react";

const Stats = () => {
  return (
    <div className="min-h-[40vh]  text-center pt-10 bg-gradient-to-l from-[#9F62F2] to-[#632EE3] text-white">
      <div>
        <h1 className="text-4xl font-bold text-white">
          Trusted by Millions, Built for You
        </h1>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-3 pt-4">
        <div className="leading-9">
          <span className="opacity-80 text-sm">Total Downloads</span>
          <h1 className="text-6xl font-bold">29.6M</h1>
          <span className="opacity-80 text-sm">21% more than last month</span>
        </div>
        <div className="leading-9">
          <span className="opacity-80 text-sm">Total Reviews</span>
          <h1 className="text-6xl font-bold">906K</h1>
          <span className="opacity-80 text-sm">46% more than last month</span>
        </div>
        <div className="leading-9">
          <span className="opacity-80 text-sm">Active Apps</span>
          <h1 className="text-6xl font-bold">132+</h1>
          <span className="opacity-80 text-sm">31 more will Launch</span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
