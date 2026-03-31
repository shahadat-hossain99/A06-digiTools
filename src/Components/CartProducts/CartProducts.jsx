import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const CartProducts = ({ cart, setCart }) => {
  //   console.log(cart);
  return (
    <div className="border p-10 border-gray-300 rounded-2xl my-10">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cart.length ? (
        <div>
          <div className="space-y-4 ">
            {cart.map((item) => (
              <div className="flex justify-between items-center bg-base-200 p-5 rounded-2xl transform transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-xl hover:border border-pink-300">
                <div className="flex items-center gap-4">
                  <div className="flex">
                    <div className="p-4 border border-gray-200 rounded-full bg-white">
                      <img className="h-8" src={item.icon} alt="" />
                    </div>
                  </div>

                  <div>
                    <h5 className="text-xl font-semibold">{item.name}</h5>
                    <p className="text-gray-400">${item.price}</p>
                  </div>
                </div>
                <button className="btn btn-ghost text-pink-600">Remove</button>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center py-6">
            <h2 className="text-2xl text-gray-400 font-bold">Total:</h2>
            <h2 className="text-2xl font-bold">$100</h2>
          </div>
          <button className="btn h-14 w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full text-lg">
            Proceed to Checkout
          </button>
        </div>
      ) : (
        <div className="flex justify-center items-center py-20">
          <div className="text-gray-400 flex flex-col items-center">
            <CiShoppingCart className="text-9xl font-bold " />
            <p className="text-xl font-bold">Your cart is empty !</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartProducts;
