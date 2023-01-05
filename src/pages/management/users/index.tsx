import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { DataTable, PageHeader, TableFilters } from "../../../@core/components";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { CustomerManagementData, SellerManagementData } from "../../../@core/utils/data";

const UserManagement = () => {
    const [value, setValue] = React.useState("1");
    
    const {Column, Data} = CustomerManagementData

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    };
    

  return (
    <>
      <PageHeader title={"User Management"} />
      <TableFilters />
      {/* Tabs */}
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ width: "100%" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              aria-label="User Management Tabs"
            >
              <Tab
                value="1"
                label={<Typography className="capitalize">Customers Management</Typography>}
                className="capitalize font-semibold"
              />
              <Tab
                value="2"
                label={<Typography className="capitalize">Suppliers Management</Typography>}
                className="capitalize font-semibold"
              />
            </Tabs>
          </Box>
          {/* Customers Tab */}
          <TabPanel value="1">
            <DataTable data={Data} tableHeader={Column} />
          </TabPanel>
          {/* Sellers Tab */}
          <TabPanel value="2">
            <DataTable data={SellerManagementData.Data} tableHeader={SellerManagementData.Column} hasReviewCount />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default UserManagement;
