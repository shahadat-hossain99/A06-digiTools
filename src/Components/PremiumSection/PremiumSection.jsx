import React, { useState } from "react";
import { use } from "react";
import PremiumProducts from "../PremiumProducts/PremiumProducts";

const Premium = ({ toolsDataPromise }) => {
  //   console.log(toolsDataPromise);

  const toolsData = use(toolsDataPromise);
  console.log(toolsData);

  const [selectedType, setSelectedType] = useState("products");

  return (
    <div className="container mx-auto md:my-12 pt-6">
      <div>
        <h2 className="text-2xl md:text-5xl font-bold text-center">
          Premium Digital Tools
        </h2>
        <p className="text-center text-gray-400 py-8">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>

        <div className="flex border border-[#F6F6F6] p-1 rounded-full w-fit gap-0.5 mx-auto mt-6">
          <button
            className={`btn ${selectedType === "products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-[0px_3px_8px_0px_rgba(97,7,236,0.30)]" : "text-[#627382]"} font-bold px-6 py-2.5 rounded-full transition-all`}
          >
            Products
          </button>
          <button
            className={`btn ${selectedType === "cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-[0px_3px_8px_0px_rgba(97,7,236,0.30)]" : "text-[#627382]"} font-bold px-6 py-2.5 border-none rounded-full transition-all`}
          >
            Cart
          </button>
        </div>
      </div>

      <PremiumProducts toolsData={toolsData} />
    </div>
  );
};

export default Premium;
