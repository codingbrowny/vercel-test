import React, { useState } from "react";
import { Button } from "@mui/material";
import Link from "next/link";
import BackupOutlinedIcon from "@mui/icons-material/BackupOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import {
  DataTable,
  PageHeader,
  Searchbar,
  SearchFilter,
} from "../../@core/components";
import { MonthsFilter, ProductsData } from "../../@core/utils/data";


const RenderAddProductBtns = () => {
  return (
    <div className="flex gap-2 items-center">
      <Button
        onClick={() => {}}
        variant="outlined"
        startIcon={<BackupOutlinedIcon />}
        className="rounded-none font- capitalize border-gray-400 text-primary-black text-opacity-75 hover:text-main-text"
      >
        Import
      </Button>
      <Link href={"products/add-product"} passHref>
        <Button
          onClick={() => {}}
          variant="contained"
          startIcon={<AddOutlinedIcon />}
          className="shadow-none bg-primary-bg rounded-none font-light hover:bg-primary-bg capitalize"
        >
          Add Product
        </Button>
      </Link>
    </div>
  );
};

const Products = () => {
  const { Columns, Data } = ProductsData;

  //Search Filter Hook
  const [filter, setFilter] = useState(MonthsFilter[0]);

  // Filter Change Handler
  const handleFilterChange = (e: any) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <PageHeader title={"Products"} children={<RenderAddProductBtns/>} />

      {/* Searchbar and product filter buttons */}
      <div className="order-head my-8 flex gap-x-2 items-center">
        <Searchbar />
        <SearchFilter
          filters={MonthsFilter}
          value={filter}
          handleChange={handleFilterChange}
        />
        <SearchFilter
          filters={MonthsFilter}
          value={filter}
          handleChange={handleFilterChange}
        />
      </div>
      {/* Products Table */}
      <div className="my-5">
        <DataTable tableHeader={Columns} data={Data} />
      </div>
    </>
  );
};

export default Products;
