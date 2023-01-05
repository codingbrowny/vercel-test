import * as React from "react";
import { OrderStatus } from "../../../types";

const RenderStatus = (background: string, status: OrderStatus) => (
  <span className={`text-white text-[13px] ${background} p-1 rounded-[3px]`}>
    {status}
  </span>
);

export default RenderStatus;
