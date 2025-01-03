import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { BsArrowUpSquareFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-gray-800 flex justify-around text-gray-400 gap-2 pb-4">
    <span className="flex justify-center items-center">
      Copyright <FaRegCopyright /> 2025 | All Rights Reserved
      </span>
      <BsArrowUpSquareFill size={25}/>
    </div>
  );
};

export default Footer;
