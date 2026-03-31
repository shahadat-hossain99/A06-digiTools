import React, { useState } from "react";
import { use } from "react";
import PremiumProducts from "../PremiumProducts/PremiumProducts";
import CartProducts from "../CartProducts/CartProducts";

const Premium = ({ toolsDataPromise, cart, setCart }) => {
  //   console.log(toolsDataPromise);

  const toolsData = use(toolsDataPromise);
  console.log(toolsData);

  const [selectedType, setSelectedType] = useState("products");

  return (
    <div className="container mx-auto md:my-12 pt-6">
      <div>
        <h2 className="text-2xl md:text-5xl font-extrabold text-center">
          Premium Digital Tools
        </h2>
        <p className="text-center text-gray-400 py-8">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>

        <div className="flex border border-[#F6F6F6] p-1 rounded-full w-fit gap-0.5 mx-auto mt-6">
          <button
            onClick={() => {
              setSelectedType("products");
            }}
            className={` ${selectedType === "products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-[0px_3px_8px_0px_rgba(97,7,236,0.30)]" : "text-[#627382]"} font-bold px-6 py-2.5 rounded-full transition-all border-none duration-700 ease-in-out`}
          >
            Products
          </button>
          <button
            onClick={() => {
              setSelectedType("cart");
            }}
            className={` ${selectedType === "cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-[0px_3px_8px_0px_rgba(97,7,236,0.30)]" : "text-[#627382]"} font-bold px-6 py-2.5 border-none rounded-full transition-all  duration-700 ease-in-out`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>

      {selectedType === "products" ? (
        <PremiumProducts setCart={setCart} cart={cart} toolsData={toolsData} />
      ) : (
        <CartProducts setCart={setCart} cart={cart} />
      )}
    </div>
  );
};

export default Premium;
