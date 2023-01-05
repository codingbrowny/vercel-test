import React from "react";
import Grid, { GridProps, RegularBreakpoints } from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  boxShadow: theme.shadows[0],
  ...theme.typography.body2,
}));

type Props = GridProps<"div", RegularBreakpoints>;

const GridItem = ({ hasBorder = true, children, ...props }) => {
  return (
    <Grid item {...props} className="p-0">
      <Item
        className={hasBorder ? "border p-3 rounded-none" : "p-3 rounded-none"}
      >
        {children}
      </Item>
    </Grid>
  );
};

export default GridItem;
