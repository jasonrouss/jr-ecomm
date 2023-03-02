import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/cartSlice";
import { GrFormAdd } from "react-icons/gr";
import { AiOutlineStar } from "react-icons/ai";

const ProductDetails = () => {
  const selectedProductId = localStorage.getItem("selectedProduct");
  const { price, img, name, description, weight, dimension, soldBy, rating } =
    JSON.parse(selectedProductId);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const selectedProduct = JSON.parse(selectedProductId);

    dispatch(addItemToCart(selectedProduct));
    toast.success(`${name} has been added to your cart.`);
  };

  return (
    <>
      <Header />
      <div className=" bg-indigo-50 rounded-lg sm:m-20 m-1">
        <div className="flex justify-center    ">
          <div className="flex mt-10 lg:mx-4  ">
            <div className="card-img ">
              <img
                src={img}
                alt={name}
                className="lg:h-[250px] h-[190px] lg:w-[230px]  w-[130px] rounded-l-xl  border-l-2 border-y-2    border-indigo-500"
              />
            </div>
            {/* Product Info */}
            <div className="card-info pl-3 bg-indigo-100 rounded-r-xl lg:w-[230px] w-[130px] h-[190px] lg:h-[250px] grid  content-between">
              <div className="text-[26px] font-bold">{name}</div>
              <div className="italic font-semibold">{description}</div>
              <div className="price add-to-cart flex justify-between p-2">
                <div>${price}</div>
                <div className="add-to-cart">
                  <button
                    className="btn btn-primary p-1 bg-indigo-400  flex    h-[30px] w-[30px]    rounded-lg transition ease-in-out duration-200 transform hover:-translate-y-1 hover:scale-110"
                    onClick={handleAddToCart}
                  >
                    <GrFormAdd size={24} />
                  </button>
                </div>
              </div>
            </div>
            {/* More Details */}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="my-10  lg:mx-4">
            <div className="border-2 rounded-lg border-indigo-500">
              <div className="flex   ">
                <div className="border-b-2 border-r-2  border-indigo-500  lg:w-[230px] w-[130px] px-4 py-2">
                  Weight:
                </div>
                <div className="border-b-2   border-indigo-500    lg:w-[230px] w-[130px] px-4 py-2">
                  {weight}
                </div>
              </div>
              <div className="flex">
                <div className="border-b-2 border-r-2 border-indigo-500   lg:w-[230px] w-[130px] px-4 py-2">
                  Dimension:
                </div>
                <div className="border-b-2  border-indigo-500 lg:w-[230px] w-[130px] px-4 py-2">
                  {dimension}
                </div>
              </div>
              <div className="flex">
                <div className="border-b-2 border-r-2 border-indigo-500   lg:w-[230px] w-[130px] px-4 py-2">
                  Sold By:
                </div>
                <div className="border-b-2  border-indigo-500 lg:w-[230px] w-[130px] px-4 py-2">
                  {soldBy}
                </div>
              </div>
              <div className="flex">
                <div className="border-r-2 border-indigo-500   lg:w-[230px] w-[130px] px-4 py-2">
                  Rating:
                </div>
                <div className=" flex  lg:w-[230px] w-[130px] px-4 py-2">
                  {rating} <AiOutlineStar className="mt-1.5 ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" sm:absolute sm:inset-x-0 sm:bottom-0  mt-20 ">
        <Footer />
      </div>
    </>
  );
};

export default ProductDetails;
