import React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress"

interface ProgressInterface {
  /**
   * Name of the item or product
   */
  item: string;
  /**
   * The progress value of the item
   */
  value: number;
}

const ItemProgress = ({ item, value }: ProgressInterface) => {
  return (
    <Box className="my-5">
      <div className="flex items-center justify-between my-1 text-sm">
        <span className="item">{item}</span>
        <span className="percentage">{value}%</span>
      </div>
      <LinearProgress
        variant="determinate"
        value={value}
        color="primary"
        className="h-2 rounded-l-full rounded-r-full"
      />
    </Box>
  );
};

export default ItemProgress