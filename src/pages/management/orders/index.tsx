import React, { useState } from 'react'
import { DataTable, PageHeader, Searchbar, SearchFilter, TableFilters } from '../../../@core/components'
import { MonthsFilter, OrdersData } from '../../../@core/utils/data';

const OrderManagement = () => {
    const [filter, setFilter] = useState(MonthsFilter[0]);
    const { Columns, Data } = OrdersData;
  return (
    <div>
      <PageHeader title={"Order Management"} />
      <TableFilters />
          <DataTable tableHeader={Columns} data={Data} />
    </div>
  );
}

export default OrderManagement