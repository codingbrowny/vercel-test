import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import React from "react";
import { AreaChart, BarChart, GridItem, LineChart, PageHeader, StatisticsBar } from "../../@core/components";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#FBFBFB",
  boxShadow: theme.shadows[0],
  ...theme.typography.body2,
  padding: theme.spacing(3),
}));

const Reports = () => {
  return (
    <div>
      <PageHeader title={"Reports"} />
      <div className="my-5">
        <StatisticsBar />
      </div>
      <Grid container spacing={2}>
        <GridItem xs={12} sm={6}>
            <LineChart />
        </GridItem>
        <GridItem xs={12} sm={6}>
            <BarChart />
        </GridItem>
        <GridItem xs={12} sm={6}>
            <AreaChart />
        </GridItem>
        <GridItem xs={12} sm={6}>
          <LineChart />
        </GridItem>
      </Grid>
    </div>
  );
};

export default Reports;
