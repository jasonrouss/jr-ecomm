import { useState } from "react";
import { useSelector } from "react-redux";

import { CiMinimize1 } from "react-icons/ci";

import { AiOutlineShoppingCart } from "react-icons/ai";
import Cart from "./Cart";

const CartSwitcher = () => {
  const [showCart, setShowCart] = useState(false);
  const cartQuantity = useSelector((state) => state.cart.cartQuantity);

  const handleCartToggle = () => {
    setShowCart((prevState) => !prevState);
  };

  return (
    <div>
      {showCart ? (
        <>
          <Cart />
          <button
            className="fixed top-6 right-9 z-50  rounded-lg transition ease-in-out duration-200 transform hover:-translate-y-1 hover:scale-110"
            onClick={handleCartToggle}
          >
            <CiMinimize1 size={24} />
          </button>
        </>
      ) : (
        <button
          className="mt-2   transition ease-in-out duration-200 transform hover:-translate-y-1 hover:scale-110 rounded-lg"
          onClick={handleCartToggle}
        >
          <div className="relative">
            <AiOutlineShoppingCart size={36} className="mt-2" />
            <div className="absolute top-0 right-0 bg-red-400 p-2 h-[18px] w-[18px]   rounded-full flex justify-center items-center">
              {cartQuantity}
            </div>
          </div>
        </button>
      )}
    </div>
  );
};

export default CartSwitcher;
