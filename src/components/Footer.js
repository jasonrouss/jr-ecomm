import React from "react";
import { GrAmex } from "react-icons/gr";
import { RiMastercardFill, RiVisaLine } from "react-icons/ri";

function Footer() {
  return (
    <footer className="bg-indigo-700 text-white  ">
      <div className="flex justify-center">
        <div className="flex justify-between gap-4 mt-6 ">
          <RiVisaLine className="text-[39px]" />
          <GrAmex className="text-[39px]" />{" "}
          <RiMastercardFill className="text-[39px]" />
        </div>
      </div>
      <div className="container py-4 flex justify-center">
        <p className="text-center text-md">© 2023 Jr Ecommerce Store</p>
      </div>
    </footer>
  );
}

export default Footer;
