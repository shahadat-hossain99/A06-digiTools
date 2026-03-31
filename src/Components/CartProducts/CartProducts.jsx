import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { toast } from "react-toastify";

const CartProducts = ({ cart, setCart }) => {
  //   console.log(cart);

  let total = 0;
  cart.forEach((item) => {
    total += item.price;
  });

  const handlePayment = () => {
    setCart([]);
    toast.success("Payment Successful");
  };

  const handleRemoveProduct = (item) => {
    console.log(cart);
    const filteredProducts = cart.filter(
      (product) => product.name !== item.name,
    );
    console.log("filteredProducts", filteredProducts);
    toast.error("Product Removed", {
      position: "top-center",
      autoClose: 3000,
      theme: "colored",
    });
    setCart(filteredProducts);
  };

  return (
    <div className="border p-2 md:p-10 border-gray-300 rounded-2xl my-10">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cart.length ? (
        <div>
          <div className="space-y-4 ">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-base-200 p-5 rounded-2xl transform transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-xl hover:border border-pink-300"
              >
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
                <button
                  onClick={() => {
                    handleRemoveProduct(item);
                  }}
                  className="btn btn-ghost text-pink-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center py-6">
            <h2 className="text-2xl text-gray-400 font-bold">Total:</h2>
            <h2 className="text-2xl font-bold">${total}</h2>
          </div>
          <button
            onClick={() => {
              handlePayment();
            }}
            className="btn h-14 w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full text-lg"
          >
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
