import React, { useState } from "react";
import {
  DataTable,
  PageHeader,
  Searchbar,
  SearchFilter,
} from "../../core/components";
import { MonthsFilter, ProductsData } from "../../core/utils/data";

const Customers = () => {
  //Search Filter Hook
  const [filter, setFilter] = useState(MonthsFilter[0]);

  // Filter Change Handler
  const handleFilterChange = (e: any) => {
    setFilter(e.target.value);
  };
  const { Columns, Data } = ProductsData;

  return (
    <div>
      <PageHeader title={"Customers"} />
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
      <DataTable tableHeader={Columns} data={[]} />
    </div>
  );
};

export default Customers;
