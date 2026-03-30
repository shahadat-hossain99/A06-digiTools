import React from "react";

const Stats = () => {
  return (
    <div className="pb-24">
      <div class="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-10 px md:p-10 ">
        <div class="stats stats-horizontal w-full text-white bg-transparent">
          <div class="stat text-center">
            <div class="stat-value">50K+</div>
            <div class="stat-desc text-white/80">Active Users</div>
          </div>

          <div class="stat text-center border-l border-white/30">
            <div class="stat-value">200+</div>
            <div class="stat-desc text-white/80">Premium Tools</div>
          </div>

          <div class="stat text-center border-l border-white/30">
            <div class="stat-value">4.9</div>
            <div class="stat-desc text-white/80">Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
