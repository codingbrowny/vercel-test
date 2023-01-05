import { Avatar } from "@mui/material";
import React from "react";
import { useWindowSize } from "../../hooks/useWindowSize";

const User = () => {
  const {width} = useWindowSize()
  return (
    <div className="flex gap-x-3 px-2" role={"button"}>
      <Avatar src="https://randomuser.me/api/portraits/men/69.jpg" />
      <div className={width >= 1080 ? "": "hidden"}>
        <p className="text-sm font-bold text-black text-opacity-70 py-0 my-0">
          Browny O'brien
        </p>
        <span className="text-sm text-gray-500 capitalize">Admin</span>
      </div>
    </div>
  );
};

export default User;
