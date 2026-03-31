import React from "react";
import { useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { toast } from "react-toastify";

const ProductsCard = ({ tool, cart, setCart }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    toast.success("Added To Cart");
    setCart([...cart, tool]);
    console.log(tool);
  };
  return (
    <div className="border border-gray-200 rounded-2xl p-4 relative  shadow transform transition duration-300 hover:scale-105">
      {tool.tagType && (
        <div
          className={`absolute top-4 right-4 px-4 py-1.5 text-xs font-semibold rounded-full uppercase ${tool.tagType === "new" ? "bg-green-100 text-green-500" : ""} ${tool.tagType === "popular" ? "bg-purple-100 text-purple-500" : ""} ${tool.tagType === "best-seller" ? "bg-yellow-100 text-yellow-500" : ""}`}
        >
          {tool.tag}
        </div>
      )}
      <div className="flex mb-5">
        <div className="p-4 border border-gray-200 rounded-full">
          <img src={tool.icon} alt="" />
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold">{tool.name}</h3>
        <p className=" text-gray-400 font-medium py-4">{tool.description}</p>
        <h3 className="text-2xl font-bold pb-4">
          ${tool.price}{" "}
          <span className="text-[16px] text-gray-400 font-normal">
            /{tool.period}
          </span>
        </h3>
        <ul className="space-y-3 mb-8 text-gray-400">
          {tool.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <FcCheckmark /> {feature}
            </li>
          ))}
        </ul>
      </div>
      <button
        disabled={isAddedToCart}
        onClick={() => handleAddToCart()}
        className={`btn ${isAddedToCart ? "bg-green-400" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"} text-white font-bold rounded-3xl btn-block  `}
      >
        {isAddedToCart === true ? "Added To Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductsCard;
