import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/cartSlice";
import { GrFormAdd } from "react-icons/gr";


const ProductCard = ({ product }) => {
  const { price, img, name , description} = product;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart(product));
  };

  return (
    <div className="card ml-2  sm:mx-8 my-4 ">
      <div className="card-body  lg:h-[355px] lg:w-[200px]  sm:h-[313px] sm:w-[180px] h-[288px] w-[130px] border-2  p-2 border-indigo-900 bg-indigo-100  shadow-lg rounded-lg">
        <div className="">
          <img
            className="h-[120px] w-[120px] sm:h-[170px] sm:w-[170px] lg:h-[208px] lg:w-[178px] rounded-lg"
            src={img}
            alt="Product "
          />
        </div>
        <div className="pl-2 ">
          <div className="name my-1 font-bold text-[19px]">{name}</div>
          <div className="name my-1 font-medium italic">{description}</div>

          <div className="flex justify-between pt-1">
            <div className="card-text"> ${price}</div>
            <button
              className="btn btn-primary p-0.5 bg-indigo-400    border-2 h-[30px] w-[30px] border-indigo-900  rounded-lg transition ease-in-out duration-200 transform hover:-translate-y-1 hover:scale-110"
              onClick={handleAddToCart}
            >
              <GrFormAdd  size={24}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
