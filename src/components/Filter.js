import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts, toggleSale, getValue } from "../store/productSlice";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useMediaQuery } from "react-responsive";

const PRICE_MIN = 0;
const PRICE_MAX = 128;

function Filter() {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });

  const [isFilterOpen, setIsFilterOpen] = useState(isLargeScreen);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  const dispatch = useDispatch();
  const filteredProducts = useSelector(
    (state) => state.product.filteredProducts
  );
  const onSale = useSelector((state) => state.product.onSale);

  const [priceRange, setPriceRange] = useState([PRICE_MIN, PRICE_MAX]);

  const handleChange = (value) => {
    setPriceRange(value);
    dispatch(filterProducts({ minPrice: value[0], maxPrice: value[1] }));
    dispatch(getValue({ minPrice: value[0], maxPrice: value[1] }));
  };
  const [isOnSale, setIsOnSale] = useState(false);

  const handleSaleToggle = () => {
    setIsOnSale(!isOnSale);
    dispatch(toggleSale(isOnSale));
  };

  return (
    <div
      className={`filter ${
        isFilterOpen ? "fixed md:static inset-0 bg-white z-50  " : "md:mx-14 "
      }`}
    >
      <button
        className="fixed lg:static bg-white  mx-1   my-2 border-2 border-slate-800  p-2 rounded-full transition ease-in-out duration-200 transform hover:-translate-y-1 hover:scale-110"
        onClick={toggleFilter}
      >
        {isFilterOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </button>

      {isFilterOpen && (
        <>
          <Slider
            range
            className="w-[135px] lg:mt-2 mt-20 mx-12"
            defaultValue={[PRICE_MIN, PRICE_MAX]}
            value={priceRange}
            onChange={handleChange}
            min={PRICE_MIN}
            max={PRICE_MAX}
          />
          <div className="flex mx-10">
            <div className="">${priceRange[0]} </div>
            <div className="ml-28">${priceRange[1]}</div>
          </div>
          <div className="flex my-2 mx-10 items-center">
            <input
              type="checkbox"
              id="on-sale"
              checked={onSale}
              className="mr-2 mt-1"
              onClick={handleSaleToggle}
            />
            <label htmlFor="on-sale">On Sale</label>
          </div>
          <p className="mx-10">Results: {filteredProducts.length}</p>
        </>
      )}
    </div>
  );
}

export default Filter;
