import React from "react";

const Stats = () => {
  return (
    <div className="md:pb-24 pb-12 pt-20">
      <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-10 px md:p-10 ">
        <div className="stats stats-horizontal w-full text-white bg-transparent">
          <div className="stat text-center">
            <div className="stat-value">50K+</div>
            <div className="stat-desc text-white/80">Active Users</div>
          </div>

          <div className="stat text-center border-l border-white/30">
            <div className="stat-value">200+</div>
            <div className="stat-desc text-white/80">Premium Tools</div>
          </div>

          <div className="stat text-center border-l border-white/30">
            <div className="stat-value">4.9</div>
            <div className="stat-desc text-white/80">Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
