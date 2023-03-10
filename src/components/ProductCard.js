import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/cartSlice";
import { GrFormAdd } from "react-icons/gr";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { selectedProductId } from "../store/productSlice";

const ProductCard = ({ product }) => {
  const { price, img, name, description } = product;
  const dispatch = useDispatch();

  const handleProductClick = () => {
    dispatch(selectedProductId(product));
    localStorage.setItem("selectedProduct", JSON.stringify(product));
  };

  const handleAddToCart = () => {
    dispatch(addItemToCart(product));
    toast.success(`${product.name} has been added to your cart.`);
  };

  return (
    <div className="card ml-2  sm:mx-8 my-4 ">
      <div className="card-body  lg:h-[355px] lg:w-[200px]  sm:h-[313px] sm:w-[180px] h-[288px] w-[130px] border-2   border-indigo-900 bg-indigo-100  shadow-lg rounded-lg">
        <Link onClick={handleProductClick} to={`/products/${product.id}`}>
          <img
            className="h-[120px] w-[130px] sm:h-[170px] sm:w-[180px] lg:h-[208px] lg:w-[200px] rounded-lg"
            src={img}
            alt="Product "
          />
        </Link>

        <div className="p-3 ">
          <Link
            onClick={handleProductClick}
            className="name my-1 font-bold text-[19px]"
            to={`/products/${product.id}`}
          >
            {name}
          </Link>
          <Link onClick={handleProductClick} to={`/products/${product.id}`}>
            <div className="name my-1 font-medium italic ">{description}</div>
          </Link>{" "}
          <div className="flex justify-between pt-1 ">
            <div className="card-text"> ${price}</div>
            <button
              className="btn btn-primary p-0.5 bg-indigo-400    border-2 h-[30px] w-[30px] border-indigo-900  rounded-lg transition ease-in-out duration-200 transform hover:-translate-y-1 hover:scale-110"
              onClick={handleAddToCart}
            >
              <GrFormAdd size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
