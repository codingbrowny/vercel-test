import React, { useState } from 'react'
import { DataTable, Searchbar, SearchFilter } from '../../core/components';

import { MonthsFilter, OrdersData } from '../../core/utils/data';

const OrdersPages = () => {
  const { Columns, Data } = OrdersData;

  //Search Filter Hook
  const [filter, setFilter] = useState(MonthsFilter[0]);

  // Filter Change Handler
  const handleFilterChange = (e: any) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <h2 className="page-name mt-5 font-bold text-lg text-primary-black">
        Orders
      </h2>
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

      {/* Orders Table */}
      <DataTable tableHeader={Columns} data={Data} />
    </>
  );
}

export default OrdersPages