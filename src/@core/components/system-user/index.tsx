import React, { ReactNode } from "react";
import {Avatar} from "@mui/material";

const SystemUser = ({
  children,
  name,
  email,
}: {
  children?: ReactNode;
  name: string;
  email: string;
}) => {
  return (
    <div className="sm:flex justify-between items-center gap-3 sm:gap-5 md:gap-10 p-3 border border-gray-200">
      <div className="flex items-center gap-2">
        <Avatar
          src="https://randomuser.me/api/portraits/men/69.jpg"
          className="h-10"
        />
        <div className="user-type">
          <p className="text-sm font-bold text-black text-opacity-70 py-0 my-0 capitalize">
            {name}
          </p>
          <span className="text-sm text-gray-500">{email}</span>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default SystemUser;
