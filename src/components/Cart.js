import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../store/cartSlice";
import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  const handleDecrementQuantity = (item) => {
    dispatch(decrementQuantity(item));
    console.log(item);
  };

  const handleIncrementQuantity = (item) => {
    dispatch(incrementQuantity(item));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
    toast.error(`${item.name} has been removed from your cart.`);
  };

 const checkoutClick = () => {
  toast.success("Thank you for shopping with us");


 }


  const getTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };

  return (
    <div className="fixed top-4 right-4 z-50 bg-indigo-50 border-2 border-slate-800 rounded-lg max-h-[500px] w-[280px] overflow-y-scroll">
      <h1 className="text-3xl pl-2  font-semibold ">Cart</h1>
      {cartItems.length === 0 ? (
        <div className="p-2 ">Your cart is empty.</div>
      ) : (
        <div className="pl-2">
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className="item-price flex ">
                  <div className=" italic my-2 mr-8">{item.name} </div>
                  <div className=" my-2">${item.price}</div>
                </div>
                <div className="flex justify-between pb-3 border-b border-slate-800  mr-2">
                  Quantity:
                  <button
                    className="border-2 border-slate-900 bg-blue-300 font-bold text-xl pb-1  h-[30px] w-[30px] rounded-lg transition ease-in-out duration-200 transform hover:-translate-y-1 hover:scale-110"
                    onClick={() => handleDecrementQuantity(item)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    className="border-2 border-slate-900 bg-blue-500 font-bold text-xl pb-1  h-[30px] w-[30px]   rounded-lg transition ease-in-out duration-200 transform hover:-translate-y-1 hover:scale-110"
                    onClick={() => handleIncrementQuantity(item)}
                  >
                    +
                  </button>
                  <br />
                  <button
                    className="border-2 border-slate-900 p-1.5 bg-red-500 mr-3 h-[30px] w-[30px] rounded-lg transition ease-in-out duration-200 transform hover:-translate-y-1 hover:scale-110"
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between">
            <p className="my-2">Total: ${getTotal()}</p>
            <button onClick={checkoutClick} className="m-1 p-1 bg-indigo-800 border-black rounded-lg text-white "> Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
