import { Paper, styled } from "@mui/material";
import ArrowUpwardSharpIcon from "@mui/icons-material/ArrowUpwardSharp";
import React, { ReactNode } from "react";
import GridItem from "../grid-item";

interface StatInterface {
  title: string;
  value: number | string;
  icon: ReactNode;
}

const Statistics = ({ title, value, icon }: StatInterface) => {
  return (
    <>
      <span className="tracking-tight text-main-gray">{title}</span>
      <div className="flex items-center justify-between my-2">
        <span className="text-xl text-primary-black font-semibold">
          {value}
        </span>
        <div className="bg-primary-bg p-2 text-white rounded-full">
          {icon}
        </div>
      </div>
      {/* Sales Percentage */}
      <div className="flex gap-1 items-center text-sm">
        <span className="text-green-600">
          <ArrowUpwardSharpIcon fontSize="small" />{" "}
        </span>
        <div className="text-gray-500"><span className="percentage text-green-600 mr-1">+30%</span>This Week</div>
      </div>
    </>
  );
};

export default Statistics;
