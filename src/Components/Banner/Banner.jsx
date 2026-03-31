import React from "react";
import bannerImg from "../../assets/banner.png";
import playImg from "../../assets/Play.png";
import badgeImg from "../../assets/dot.png";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-192">
        <div className="hero-content flex-col gap-14 lg:flex-row-reverse px-3">
          <img src={bannerImg} />
          <div className="flex flex-col items-center justify-center text-center md:text-left md:items-start">
            <div className="flex ">
              <p className="py-2 px-4 rounded-full flex items-center gap-2 bg-[#E1E7FF]">
                {" "}
                <img className="h-4" src={badgeImg} />{" "}
                <span className="font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                  New: AI-Powered Tools Available
                </span>
              </p>
            </div>
            <div className="">
              <h1 className="text-4xl md:leading-20 md:text-6xl font-extrabold py-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent ">
                Supercharge Your <br /> Digital Workflow{" "}
              </h1>
              <p className="py-6 text-lg">
                Access premium AI tools, design assets, templates, and
                productivity <br /> software—all in one place. Start creating
                faster today. <br /> Explore Products
              </p>
            </div>
            <div className="space-x-4">
              <button className="btn btn-primary  bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">
                Explore Products
              </button>
              <button className="btn btn-soft btn-primary rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                {" "}
                <img src={playImg} alt="" /> Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
