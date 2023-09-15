"use client";
import { CustomButtonProps } from "@/types";
import React from "react";

const CustomButton = ({ title, handleClick, btnType }: CustomButtonProps) => {
  return (
    <button className="custom-button" onClick={handleClick}>
      {title}
    </button>
  );
};

export default CustomButton;
