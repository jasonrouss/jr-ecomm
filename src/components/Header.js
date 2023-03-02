import React from "react";
import CartSwitcher from "./CartSwitcher";
import SearchBar from "./SearchBar";
import logo from "./elogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex sm:justify-between justify-around m-4 ">
        <Link to="/">
          <img
            src={logo}
            alt="jr ecomm logo "
            className=" h-[60px]  w-[80px]  lg:h-[60px] lg:w-[100px] "
          />{" "}
        </Link>
        <div className="search">
          <SearchBar />
        </div>
        <div className="cart">
          <CartSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Header;
