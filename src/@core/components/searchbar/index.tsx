import { IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React from "react";

const Searchbar = () => {
  return (
      <div className="relative w-full md:w-[400px] lg:w-[500px] transition-all duration-300">
        <input
          type="text"
          id="default-search"
          className="block py-3 px-5 pr-10 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border outline-none border-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search..."
        />
        <div className="text-white absolute right-1 bottom-1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
        </div>
      </div>
  );
};

export default Searchbar;
