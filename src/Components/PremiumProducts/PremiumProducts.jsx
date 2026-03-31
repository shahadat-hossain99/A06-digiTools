import React from "react";
import ProductsCard from "./ProductsCard";

const PremiumProducts = ({ toolsData, cart, setCart }) => {
  // console.log(toolsData);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 py-6">
      {toolsData.map((tool) => (
        <ProductsCard setCart={setCart} cart={cart} key={tool.id} tool={tool} />
      ))}
    </div>
  );
};

export default PremiumProducts;
